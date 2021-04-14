const homeText = `
Choose a data source and format to download. Click on each source for more information about its tables, fields and download formats.

This website collects data published using the [Open Contracting Data Standard (OCDS)](https://standard.open-contracting.org/), converts it to a tabular structure and provides downloads in different formats. Learn more about [using the data](/using).

Data is collected weekly using [Kingfisher Collect](https://kingfisher-collect.readthedocs.io/en/latest/) and processed using [Apache Airflow](https://airflow.apache.org/). Check the [Airflow dashboard](https://ocdsdata.opendataservices.coop/) for more information on the status of the pipeline for each data source. Learn more about the [processing pipeline](/processing).

This website is in alpha and is maintained on best-efforts basis.
`
export { homeText }

const sourceText = {
  pg_dump: `
A \`.pg_dump\` file containing compressed PostgresSQL 13 dump. Use the following command to restore the dump:

\`\`\`pg_restore -d [db] --no-owner -c [source].pg_dump\`\`\`

A new schema \`{name}\` will be created with the tables in the table list.

The dump includes an additional \`_compiled_release\` table that contains compiled releases in raw OCDS JSON format. For sources that publish individual releases, the table also contains a list of releases in raw OCDS JSON format.`,

  csv: `
A \`.zip\` file containing:

* a CSV file for each table in the table list
* a \`fields.csv\` file with a list of fields and descriptions for each table.`,

  sqlite: `
A \`.sqlite\` file containing each table in the table list.

You can use a tool like [DB Browser for SQLite](https://sqlitebrowser.org/) to view the data open the file.`,

  bigquery: `
  A BigQuery project containing data from this source.

Use the Explorer to navigate to the data from this source and click on a table to see its schema and field descriptions.

You need a Google account to query the data. You can process up to 1TB of query data per month free of charge.

Read the [quickstart guide](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui) to learn more about using BigQuery.`,

  xlsx: `
An \`.xlsx\` file containing:

* a sheet for each table in the table list.
* a \`Field Information\` sheet with a list of fields and descriptions for each table.`,

  notebook: `
A hosted Jupyter Notebook that sets up a PostgreSQL environment and loads data from this source.

Follow the instructions in the notebook to query the data.

You need to create a copy of the notebook to start using it.`
}

export { sourceText }

const aboutText = `

This website was created as a research project by [Open Data Services Co-operative](https://opendataservices.coop/).

The aim of this website is to test approaches in providing:

* Acccess to open data in quick-to-use formats, including BigQuery and Colaboratory Notebooks.
* Easy-to-use tabular representations of JSON Schema defined JSON data.
* Transparent processing pipelines that can deal with large datasets.
`

export { aboutText }

const useText = [`
The data available on this website is a tabular representation of data collected from OCDS publishers. The tabular representation includes some extra fields to make dealing with one-to-many relationships easier. You can download the  data and analyse it using a database, spreadsheet or other analytical tool.

This page describes the fields contained within the data, the structure of the data and how to join data from different tables.

### Fields

The fields included in the data vary by data source. Data sources can include fields from the [OCDS schema](https://standard.open-contracting.org/latest/en/schema/release/) and [extensions](https://extensions.open-contracting.org/). They can also include additional fields specific to a particular data source.

All fields included in the original JSON data should appear in the converted data.

Where possible, downloads include a schema with a description for each field. CSV downloads include an extra \`fields.csv\` file with a list of fields and descriptions. Excel downloads include an additional \`Field Information\` sheet with a list of fields and descriptions.`,
'<field description example>',
`You can also refer to the data source's page for a list of its tables and fields.

### Data structure

The data is structured according to the [tabular serialization of OCDS](https://standard.open-contracting.org/latest/en/guidance/build/serialization/#csv).

The primary table is the \`release\` table, which contains one row for each contracting process. Each column represents a field belonging to the \`release\` object in the source data.`,
'<release table example>',
'The processing pipeline creates tables for each array of objects in the source data. For example, in OCDS data, `awards` is an array, so the pipeline creates a separate `awards` table. Each column represents a field belonging to the objects in the array.',
'<awards table example>',
`The processing pipeline also creates the following tables for one-to-one relationships:

* \`buyer\` (related to \`release\`)
* \`planning\` (related to \`release\`)
* \`tender\` (related to \`release\`)
* \`tender_procuringEntity\` (related to \`tender\`)
* \`contracts_implementation\` (related to \`contracts\`)


For convenience, the processing pipeline also:

* adds fields from the \`awards\` table to the \`contracts\` table. These fields are prefixed with \`_award_\`, e.g. \`contracts._award_date\`
* add fields from the \`parties\` table to the \`buyer\`, \`tender_procuringEntity\`, \`tender_tenderers\` and \`awards_suppliers\` tables. These fields are prefixed with \`_party_\`, e.g. \`buyer._party_address_countryName\`.

**Warning:** One award can relate to many contracts, so beware of double-counting when aggregating \`_award_\` fields in the \`contracts\` table.

### Joins

Each table contains a \`_link\` field. The \`_link\` field is unique within the scope of the table and is the primary key.

Tables that have a relationship to another table also contain a \`_link_<table name>\` field. \`_link_<table name>\` fields are foreign keys that you can use to join related tables. For example, \`awards_suppliers\` contains a \`_link_awards\` field which you can use to join to the \`awards\` table:

\`\`\`sql
SELECT
  *
FROM
  award_suppliers
JOIN
  awards ON awards_supppliers._link_awards = awards._link
\`\`\`

The processing pipeline creates \`_link_<table name>\` fields for all one-to-many relationships in the source data and for the following relationships:

* \`contracts\` to \`awards\`
* \`buyer\`, \`tender_procuringEntity\`, \`tender_tenderers\` and \`awards_suppliers\` to \`parties\`

### Raw JSON data

PostgreSQL Database Dumps include an additional \`_compiled_release\` table that contains compiled releases in raw OCDS JSON format. For sources that publish individual releases, the table also contains a list of releases in raw OCDS JSON format.
`]

export { useText }

const processingText = `
This website uses [Apache Airflow](https://airflow.apache.org/) to manage a processing pipeline. This page describes the tasks performed by the processing pipeline. In summary, for each source, the pipeline performs the following tasks:

* Create a PostgreSQL database schema to store data in
* Download data from the source using Kingfisher Collect
* Store the data in the database
* Merge releases to create compiled releases
* Create an intermediate JSON representation of the data
* Compare the structure of the data to the OCDS schema
* Create tables containing a tabular version of the data
* Generate a CSV export
* Generate an Excel export
* Export data to BigQuery
* Generate a PostgreSQL dump

### Scheduling

The processing pipeline for each source runs once per week. Check the [Airflow dashboard](https://ocdsdata.opendataservices.coop/home) for details of the schedule.

### Tasks

The processing pipeline includes the following steps:

#### Create schema

* Create a PostgreSQL database schema named \`<data_source>_process\` where \`data_source\` is the name of the data source.

#### Scrape

* Use [Kingfisher Collect](https://kingfisher-collect.readthedocs.io/en/latest/) to download data from the source and save it to a local flat file.
* Load data from the flat file into the \`_scrape_data\` table.
* Load scrape logs and statistics into the \`_job_info\` table.

#### Create base tables

* Create a \`_compiled_release\` table with one row per contracting process from the \`_scrape_data\` table.
* If there are multiple releases per contracting process add them to a releases list in the \`_compiled_release\` table.
* Create a \`_package_data\` table.

#### Compile releases

* If there are multiple releases per contracting process, use [OCDS Merge](https://ocds-merge.readthedocs.io/en/latest/) to create a compiled release.

#### Release objects

Create a JSON format intermediate representation of the data:

* Extract all objects with one-to-many relationship.
* Generate a name for each object and field.
* Add primary and foreign keys to each object.
* Add fields from related objects.

See [Data structure](/use-the-data) for more information on the structure of the data.

#### Schema analysis

* Compare the release objects created in the previous step to the OCDS schema and extension schemas.
* Extract field descriptions and types from the schema.
* Generate schema and field information to be used in the exports.
* Store schema and field information in object storage for use by this website.

#### PostgreSQL tables

* Create a table for each release object containing a tabular version of the release object.

#### CSV export

* Export the PostgreSQL tables to CSV files and store them in object storage with metadata.
* Generate a \`fields.csv\` file with a list of fields and descriptions.

#### Excel export

* Export the PostgreSQL tables to an Excel file and store it in object storage online.
* Shorten long sheet names:
  * tender_procuringEntity →  procuringEntity
  * additionalIdentifiers  →  ids
  * additionalClassifications → class
  * awards_suppliers → suppliers
  * contracts_implementation_transactions → transactions
  * contracts_implementation→ implementation
  * document→ doc
* Generate a \`Field Information\` sheet with a list of fields and descriptions.

#### BigQuery export

* Generate avro files from the PostgreSQL tables.
* Export the data to BigQuery.

#### PostgreSQL dump

* Rename the schema to the name of the source, e.g. \`zambia_process\` to \`zambia\`.
* Dump the data to online storage.
* Generate a Jupyter Notebook and upload to Google Drive.
`

export { processingText }
