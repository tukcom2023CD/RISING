FROM node:18.12.1

USER root 

WORKDIR /frontend
COPY . /frontend

# 개발
RUN npm install
RUN npm install -D prettier

# 배포
# RUN yarn 
# RUN yarn --ignore-platform

# Make variable API_URL to put uri into url
# uri 변수 형태로 받아서 url에 넣어 작동하도록 함
ENV REACT_APP_HOST_IP_ADDRESS $API_URL
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

COPY . ./

# 개발
# docker-compose.yml 파일에 npm start 작성할거면 지워도 됨
#RUN npm start

# 배포
# RUN yarn run build

EXPOSE 3000