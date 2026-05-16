# Bonus Submission Guide

Use this guide to present both assignment parts clearly.

## What to submit

1. `Music_Listening_Analytics_Bonus_PartA_PySpark.ipynb`
2. `Music_Recommendation_PySpark.ipynb`
3. Dataset link: https://github.com/eifuentes/lastfm-dataset-1K
4. `README.md`
5. Presentation slides, maximum 10 slides
6. Demo video

## 10-slide presentation structure

1. **Title**
   Music Listening Analytics and Recommendation System Using PySpark.

2. **Problem and Objectives**
   Explain that the project has two parts: listening behavior analytics and music recommendation.

3. **Dataset**
   Last.fm 1K users dataset with user, timestamp, artist, track, and profile data.

4. **System Architecture**
   Dataset -> PySpark loading -> cleaning -> analytics / ML -> outputs.

5. **Part A: Big Data Analytics**
   Show dataset summary, top artists/tracks, listening by hour/day, and country analysis.

6. **Part A: User Segmentation**
   Explain KMeans clustering using total listens, diversity, repeat rate, night share, and weekend share.

7. **Part B: Recommendation System**
   Explain collaborative filtering and Spark MLlib ALS with implicit feedback.

8. **Evaluation**
   Show RMSE diagnostic, Precision@10, and Hit Rate@10.

9. **Example Output**
   Show recommendations for `user_000031` and the saved CSV output.

10. **Conclusion**
   Summarize findings, limitations, and future improvements.

## Demo video script

1. Open Jupyter Notebook from the local URL.
2. Show the two notebooks in the project folder.
3. Open the Part A notebook and briefly show:
   - Dataset loading
   - Dataset summary
   - Top artists/tracks
   - KMeans segment summary
4. Open the Part B notebook and briefly show:
   - ALS model training
   - Evaluation metrics
   - Recommendation output
5. Show the `outputs` folder with generated CSV files.
6. End by explaining that Part A covers big data analytics and Part B covers recommendation systems.

## Key results to mention

- Part A used 1,000,000 listening events for the laptop demo.
- The analytics run found 23,007 unique artists and 159,093 unique tracks in the sample.
- KMeans created three listener segments: heavy listeners, balanced listeners, and music explorers.
- Part B generated top-10 song recommendations for a selected user using ALS collaborative filtering.

