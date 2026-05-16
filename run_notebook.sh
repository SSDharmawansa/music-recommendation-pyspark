#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export JAVA_HOME="$PROJECT_DIR/.jdk/jdk-17.0.19+10/Contents/Home"
export PATH="$JAVA_HOME/bin:$PROJECT_DIR/.venv/bin:$PATH"
export SPARK_LOCAL_IP=127.0.0.1
export PYSPARK_PIN_THREAD=false
export MPLCONFIGDIR="$PROJECT_DIR/.matplotlib"
export JUPYTER_RUNTIME_DIR="$PROJECT_DIR/.jupyter/runtime"
export JUPYTER_CONFIG_DIR="$PROJECT_DIR/.jupyter/config"
export JUPYTER_DATA_DIR="$PROJECT_DIR/.jupyter/data"

mkdir -p "$JUPYTER_RUNTIME_DIR" "$JUPYTER_CONFIG_DIR" "$JUPYTER_DATA_DIR" "$MPLCONFIGDIR" "$PROJECT_DIR/spark-temp"
cd "$PROJECT_DIR"
exec "$PROJECT_DIR/.venv/bin/jupyter" notebook --no-browser --ip=127.0.0.1 Music_Recommendation_PySpark.ipynb
