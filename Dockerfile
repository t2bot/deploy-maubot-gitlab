FROM dock.mau.dev/maubot/maubot:standalone
ENV PYTHONPATH=/opt/maubot
RUN apk add git
RUN git clone --depth=1 https://github.com/maubot/gitlab.git /gitlab
WORKDIR /gitlab
RUN python3 -m pip install python-gitlab
CMD python3 -m maubot.standalone -m ./maubot.yaml -b /data/config.yaml -c /data/config.yaml
