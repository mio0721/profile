---
layout: default
permalink: /zh/cv/
lang: zh-CN
translation_key: cv
localized_permalinks:
  en: /cv/
  zh-CN: /zh/cv/
title: 简历
nav_title:
  en: CV
  zh-CN: 简历
nav: false
nav_order: 5
cv_pdf: /assets/rendercv/rendercv_output/Mio_CV_ZH.pdf
description:
toc:
  sidebar: left
---

<link rel="stylesheet" href="{{ '/assets/css/mio-cv.css' | relative_url }}">

{% assign resume = site.data.resume_zh %}

<div class="post">
  <header class="post-header">
    <h1 class="post-title">
      {{ page.title }}
      {% if page.cv_pdf %}
        <a href="{{ page.cv_pdf | relative_url }}" target="_blank" rel="noopener noreferrer" class="float-right" aria-label="下载 PDF 简历">
          <i class="fa-solid fa-file-pdf"></i>
        </a>
      {% endif %}
    </h1>
  </header>

  <article class="mio-cv">
    {% if resume.basics %}
      <section id="basics" class="mio-cv-section card mt-3 p-3" data-toc-text="基本信息">
        <h3 class="card-title font-weight-medium">基本信息</h3>
        <table class="table table-cv table-sm table-borderless table-responsive table-cv-map">
          {% if resume.basics.name %}
            <tr><td class="p-1 pr-2 font-weight-bold"><b>姓名</b></td><td class="p-1 pl-2 font-weight-light">{{ resume.basics.name }}</td></tr>
          {% endif %}
          {% if resume.basics.label %}
            <tr><td class="p-1 pr-2 font-weight-bold"><b>身份</b></td><td class="p-1 pl-2 font-weight-light">{{ resume.basics.label }}</td></tr>
          {% endif %}
          {% if resume.basics.url %}
            <tr><td class="p-1 pr-2 font-weight-bold"><b>主页</b></td><td class="p-1 pl-2 font-weight-light"><a href="{{ resume.basics.url }}" target="_blank" rel="noopener noreferrer">{{ resume.basics.url }}</a></td></tr>
          {% endif %}
          {% if resume.basics.summary %}
            <tr><td class="p-1 pr-2 font-weight-bold"><b>简介</b></td><td class="p-1 pl-2 font-weight-light">{{ resume.basics.summary }}</td></tr>
          {% endif %}
        </table>
      </section>
    {% endif %}

    {% if resume.work.size > 0 %}
      <section id="experience" class="mio-cv-section card mt-3 p-3" data-toc-text="学生工作">
        <h3 class="card-title font-weight-medium">学生工作</h3>
        <ul class="card-text font-weight-light list-group list-group-flush">
          {% assign work = resume.work | sort: 'startDate' | reverse %}
          {% for entry in work %}
            <li class="list-group-item">
              <div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2 text-center date-column">
                  {% assign start_date = entry.startDate | split: '-' | slice: 0, 2 | join: '.' %}
                  {% if entry.endDate == '至今' %}{% assign end_date = '至今' %}{% else %}{% assign end_date = entry.endDate | split: '-' | slice: 0, 2 | join: '.' %}{% endif %}
                  <table class="table-cv"><tr><td><span class="badge font-weight-bold text-uppercase align-middle">{{ start_date }} - {{ end_date }}</span></td></tr></table>
                </div>
                <div class="col-xs-10 col-sm-10 col-md-10 cv-entry-body">
                  <h6 class="title font-weight-bold">{{ entry.position }}</h6>
                  <h6>{{ entry.name }}</h6>
                  {% if entry.summary %}<h6 class="entry-summary">{{ entry.summary }}</h6>{% endif %}
                </div>
              </div>
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endif %}

    {% if resume.education.size > 0 %}
      <section id="education" class="mio-cv-section card mt-3 p-3" data-toc-text="教育背景">
        <h3 class="card-title font-weight-medium">教育背景</h3>
        <ul class="card-text font-weight-light list-group list-group-flush">
          {% assign education = resume.education | sort: 'startDate' | reverse %}
          {% for entry in education %}
            <li class="list-group-item">
              <div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2 text-center date-column">
                  {% assign start_date = entry.startDate | split: '-' | slice: 0, 2 | join: '.' %}
                  {% if entry.endDate == '至今' %}{% assign end_date = '至今' %}{% else %}{% assign end_date = entry.endDate | split: '-' | slice: 0, 2 | join: '.' %}{% endif %}
                  <table class="table-cv">
                    <tr><td><span class="badge font-weight-bold text-uppercase align-middle">{{ start_date }} - {{ end_date }}</span></td></tr>
                    {% if entry.location %}<tr><td><p class="location"><i class="fa-solid fa-location-dot iconlocation"></i> {{ entry.location }}</p></td></tr>{% endif %}
                  </table>
                </div>
                <div class="col-xs-10 col-sm-10 col-md-10 cv-entry-body">
                  <h6 class="title font-weight-bold">{{ entry.studyType }}</h6>
                  <h6>{{ entry.institution }}</h6>
                  <h6 class="entry-summary">{{ entry.area }}</h6>
                </div>
              </div>
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endif %}

    {% if resume.projects.size > 0 %}
      <section id="projects" class="mio-cv-section card mt-3 p-3" data-toc-text="科研项目">
        <h3 class="card-title font-weight-medium">科研项目</h3>
        <ul class="card-text font-weight-light list-group list-group-flush">
          {% for entry in resume.projects %}
            <li class="list-group-item">
              <div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2 text-center date-column">
                  {% assign start_date = entry.startDate | split: '-' | slice: 0, 2 | join: '.' %}
                  {% if entry.endDate == '至今' %}{% assign end_date = '至今' %}{% else %}{% assign end_date = entry.endDate | split: '-' | slice: 0, 2 | join: '.' %}{% endif %}
                  <table class="table-cv"><tr><td><span class="badge font-weight-bold text-uppercase align-middle">{{ start_date }} - {{ end_date }}</span></td></tr></table>
                </div>
                <div class="col-xs-10 col-sm-10 col-md-10 cv-entry-body">
                  <h6 class="title font-weight-bold">{{ entry.name }}</h6>
                  {% if entry.role %}<h6 class="entry-summary">{{ entry.role }}</h6>{% endif %}
                  {% if entry.highlights %}
                    <ul class="items">{% for item in entry.highlights %}<li><span class="item">{{ item }}</span></li>{% endfor %}</ul>
                  {% endif %}
                </div>
              </div>
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endif %}

    {% if resume.awards.size > 0 %}
      <section id="honors-and-awards" class="mio-cv-section card mt-3 p-3" data-toc-text="荣誉奖励">
        <h3 class="card-title font-weight-medium">荣誉奖励</h3>
        <ul class="card-text font-weight-light list-group list-group-flush">
          {% for entry in resume.awards %}
            <li class="list-group-item">
              <div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2 text-center date-column">
                  <table class="table-cv"><tr><td><span class="badge font-weight-bold text-uppercase align-middle">{{ entry.date | split: '-' | first }}</span></td></tr></table>
                </div>
                <div class="col-xs-10 col-sm-10 col-md-10 cv-entry-body">
                  <h6 class="title font-weight-bold">{{ entry.title }}</h6>
                  {% if entry.summary %}<h6 class="entry-summary">{{ entry.summary }}</h6>{% endif %}
                </div>
              </div>
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endif %}

    {% if resume.skills.size > 0 %}
      <section id="skills" class="mio-cv-section card mt-3 p-3" data-toc-text="专业技能">
        <h3 class="card-title font-weight-medium">专业技能</h3>
        <div class="list-groups row">
          {% for entry in resume.skills %}
            <div class="list-group col-md-6">
              <table class="table-cv list-group-table">
                <tr><td class="list-group-category-icon"></td><td class="list-group-category">{{ entry.name }}</td></tr>
                {% for keyword in entry.keywords %}<tr><td></td><td class="list-group-name">{{ keyword }}</td></tr>{% endfor %}
              </table>
            </div>
          {% endfor %}
        </div>
      </section>
    {% endif %}
  </article>
</div>

<script src="{{ '/assets/js/mio-cv-scrollspy.js' | relative_url }}" defer></script>
