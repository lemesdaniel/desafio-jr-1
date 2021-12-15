FROM python:3.9.7

WORKDIR /user/src/app

COPY requirements.txt ./

RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]