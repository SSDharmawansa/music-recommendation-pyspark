# Music Recommendation System Using PySpark

This project is for the Big Data Analytics mini project assignment. It now includes both assignment parts:

- Part A: Big Data Analytics Using Apache Spark
- Part B: Recommendation System Using Big Data

Completing both parts supports the bonus-mark requirement in the assignment guideline.

## Project idea

The project uses the Last.fm 1K listening-history dataset. Part A analyzes listening behavior and user segments. Part B builds a music recommendation system using collaborative filtering.

## Main files

- `Music_Listening_Analytics_Bonus_PartA_PySpark.ipynb`
- `Music_Recommendation_PySpark.ipynb`

## Dataset

Recommended dataset:

- Last.fm Dataset - 1K users: https://github.com/eifuentes/lastfm-dataset-1K

The dataset contains user, timestamp, artist, and song listening events collected from the Last.fm API. The notebook supports:

- `data/lastfm-dataset-50.snappy.parquet`
- `data/userid-timestamp-artid-artname-traid-traname.tsv`
- `data/userid-timestamp-artid-artname-traid-traname.tsv.zip`
- `/Users/sahanpaymedia/Downloads/lastfm-dataset-1K/userid-timestamp-artid-artname-traid-traname.tsv`
- `/Users/sahanpaymedia/Downloads/lastfm-dataset-1K/userid-profile.tsv`

Your downloaded dataset folder has been integrated into the notebook. If none of these files exists, the notebook creates `data/sample_lastfm_listens.csv` so the workflow can be tested. Use the real Last.fm dataset for the final assignment submission.

## How to run

### Local setup used in this folder

The project includes a local launcher:

```bash
./run_notebook.sh
```

This starts Jupyter Notebook with the project virtual environment and local Java runtime.

Open the URL printed in the terminal, then run the notebook cells from top to bottom.

### General setup

1. Open `Music_Recommendation_PySpark.ipynb` in Jupyter Notebook, JupyterLab, or Google Colab.
2. Run the first setup cell. It installs missing packages such as PySpark.
3. Keep the downloaded Last.fm folder at `/Users/sahanpaymedia/Downloads/lastfm-dataset-1K`, or copy the TSV files into the project `data` folder.
4. Run all notebook cells from top to bottom.
5. Check the generated recommendation table and files saved in the `outputs` folder.

The full listening file is about 2.4 GB and contains 19,150,868 rows. The notebook uses `MAX_RAW_ROWS = 1000000` by default so it can run reliably on a laptop. Set `MAX_RAW_ROWS = None` only when you want to process the full file and your machine has enough memory.

If you see `ConnectionRefusedError` from PySpark, the Spark Java driver has crashed. Restart the Jupyter kernel, keep `MAX_RAW_ROWS = 1000000`, and run the notebook from the first cell again.

## Part A analytics method

The Part A notebook uses PySpark for large-scale data processing and Spark ML KMeans clustering for listener segmentation. It analyzes:

- Dataset summary statistics
- Top artists and tracks
- Listening activity by hour and day
- Country-level listener distribution
- User behavior features
- Listener segments

## Part B recommendation method

The project uses collaborative filtering with Spark MLlib ALS. Listening count is converted into implicit feedback, meaning repeated listens are treated as stronger user preference.

## Outputs

The notebook generates:

- Part A dataset summary, temporal analytics, country analytics, and user segments
- Dataset summary statistics
- Top artist and track analysis
- ALS model training
- RMSE diagnostic
- Precision@10 and hit-rate@10 ranking metrics
- Top 10 song recommendations for a selected user
- CSV outputs for presentation or demo use

## Suggested submission items

- `Music_Recommendation_PySpark.ipynb`
- `Music_Listening_Analytics_Bonus_PartA_PySpark.ipynb`
- Dataset file or dataset link
- Short README
- Presentation slides, maximum 10 slides
- Demo video showing notebook execution and recommendation output
