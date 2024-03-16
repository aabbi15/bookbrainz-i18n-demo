<a name="br1"></a> 

# **GSOC 2024: Set up BookBrainz**

**for Internationalization**

Pdf version -

[GSOC](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[ ](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[2024:](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[ ](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[Set](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[ ](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[up](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[ ](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[BookBrainz](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[ ](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[for](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[ ](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)[Internationalization](https://docs.google.com/document/d/17LNXtcv1iWH9zFS5cVwJf3wiOWpH-tkTEVmjVbqnRNQ/edit?usp=sharing)

Proposed Mentors: monkey

Languages/skills: Javascript/Typescript

Estimated Project Length: 175 hours

Expected outcomes: Full translation project and workflow set up, with as much as

possible of the website text captured for translation

# Contact Information

Name  : Abhishek

IRC Nickname : aabbi15

TimeZone: UTC +05:30

Email  : abhishekabbi.work@gmail.com

GitHub : <https://github.com/aabbi15>

Twitter : <https://twitter.com/aabbi_work>

LinkedIn: <https://www.linkedin.com/in/abhishek-abbi>



<a name="br2"></a> 

# Project Overview

BookBrainz is currently available only in the English language which limits it from

catering to the global audience.

Therefore, we want to internationalize the website, enabling it to support multiple

languages and thereby, extending its user base.

The MusicBrainz team has already worked on internationalization and moved to use a

Weblate server for the same. So the project would include setting up a new translation

project on the same Weblate server, integrating a suitable internationalization

framework (i18next) and setting up a workflow for continuous translation updates.

This will enhance the user experience for non-English speakers and contribute to the

growth of the BookBrainz community.

# Goals

Here are a list of goals that would be expected for the project to be considered as

completed. I have also listed optional goals in the end.

1\. Create a new project on the Weblate server specifically for BookBrainz

translations.

2\. Configure the project settings and permissions for translators and reviewers.

3\. Install and configure the [i18next](https://www.i18next.com/)[ ](https://www.i18next.com/)library in the BookBrainz codebase.

4\. Implement the necessary components and frontend to display translated text in

the application.

5\. Identify and extract as much as possible user-facing text that requires translation.

6\. Ensure that all text is properly formatted, divided into components and ready for

translation.

7\. Create separate translation files and directories.

8\. Design a JSON/csv format for updating the translations.



<a name="br3"></a> 

9\. Documenting the Internationalization process used in BB in detail for future

developers.

**[optional]**

A. Translate a subset of BookBrainz text into Hindi to demonstrate the

internationalization workflow.

**Integrating the react-i18next framework**

Upon exploring various options for internationalization such as Polyglot, LinguiJS,

Globalize, FormatJS, Next-translate, and react-intl in React, I've chosen to use

react-i18next due to its comprehensive features, ease of integration with React

applications, extensive documentation, and other reasons mentioned below.

# Why i18next?

● User Language Detection: i18next offers plugins that automatically detects the

users language using various methods like cookies, sessionStorage,

localStorage and htmlTags.

● Translation Loading: i18next offers convenient methods to load translations from

the server, caching them in the local storage or combining both of them.

● i18n formats: There are a range of options such as fluent and basic JSON,

allowing us to choose the preferred internationalization [f](https://www.i18next.com/overview/plugins-and-utils#i18n-formats)[ormat](https://www.i18next.com/overview/plugins-and-utils#i18n-formats)[ ](https://www.i18next.com/overview/plugins-and-utils#i18n-formats)that suits our

needs.

● Flexibility: i18next is highly customizable, allowing us to use different date

formatting libraries, adjust interpolation prefixes and suffixes, or even use

gettext-style keys.

● Plugins and Utils: i18next offers a REALLY WIDE range of [plugins/utils](https://www.i18next.com/overview/plugins-and-utils)[ ](https://www.i18next.com/overview/plugins-and-utils)that can

be used to customize our preferences as well as help in other features such as



<a name="br4"></a> 

integrating backends, extracting text, post processing or creating our own

plugins(mostly will not be required).

● Scalability: i18next supports the separation of translations into multiple files and

loading them on demand, which is ideal for larger projects.

● Ecosystem: There is a robust ecosystem of modules built around i18next,

including tools for extracting translations from code, bundling translations with

webpack, and converting between different translation formats.

***Preferred options in react-18next***

➢ Format - I have chosen [i18next](https://www.i18next.com/misc/json-format)[ ](https://www.i18next.com/misc/json-format)[JSON](https://www.i18next.com/misc/json-format)[ ](https://www.i18next.com/misc/json-format)[v4](https://www.i18next.com/misc/json-format)[ ](https://www.i18next.com/misc/json-format)as it is the default format for the i18next

framework with dense documentation/examples available for referral.

[I18next-fluent](https://github.com/i18next/i18next-fluent?tab=readme-ov-file)[ ](https://github.com/i18next/i18next-fluent?tab=readme-ov-file)was a close second but its complexity for translations is not

necessary in our use case.

➢ Loading translations - For a large website such as BB with infrequent language

switches and updates, caching translations would be preferred to enhance

performance and reduce the number of calls to the server to fetch translations.

➢ Detecting user language: The built-in plugin [i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)

can be used for this purpose and preferences will be paid to cookies and domain.

➢ Extracting text: [i18next-scanner](https://github.com/i18next/i18next-scanner)[ ](https://github.com/i18next/i18next-scanner)is an API which would parse through the

codebase to get key-value pairs. (This would obviously require manual

improvements and checks)

# Capturing text for translation

● Identify all the texts that need internationalization based on the decided

components. This will include all the alerts and messages as well.

● Mark the identified text for translation by replacing a hardcoded string such as

“Welcome to BookBrainz” with t(‘welcome\_to\_bookbrainz’)

● Extract the strings using a builtin library by i18next which is called

[i18next-scanner](https://i18next.github.io/i18next-scanner/)[ ](https://i18next.github.io/i18next-scanner/)and [i18next-parser](https://github.com/i18next/i18next-parser)[ ](https://github.com/i18next/i18next-parser)for this feature.

● Add these parsed json templates to their respective files in the locales folder.



<a name="br5"></a> 

● Provide the template file in .json format to the translators by uploading the

locales folder to weblate

# Configuring i18next

The code for initializing i18next in a project using our desired options would look like this

would look like this:

```javascript

import i18next from 'i18next'

import { initReactI18next } from 'react-i18next'

import HttpApi from 'i18next-http-backend'

import LanguageDetector from 'i18next-browser-languagedetector'

import resourcesToBackend from 'i18next-resources-to-backend'

const i18nOptions = {

defaultNS: 'main',

supportedLngs: ['en', 'de', 'fr','hi'],

fallbackLng: 'en',

debug: false,

*// Options for language detector*

detection: {

order: ['path', 'cookie', 'htmlTag'],

caches: ['cookie'],

},

}

i18next

.use(HttpApi)



<a name="br6"></a> 

.use(LanguageDetector)

.use(initReactI18next)

.use(resourcesToBackend((language, namespace) => import

(`/public/assets/locales/${language}/${namespace}.json`)))

.init({

ns: [ 'main','header','footer'],

i18nOptions,

})


```

# Translation Files Structure

The files for translations will be stored in a folder structure as such.

■ Locales

■ <lang\_name>

● <namespace\_name>.json

● <namespace2\_name>.json

● <namespace3\_name>.json

■ <lang2\_name>

● <namespace\_name>.json

● <namespace2\_name>.json

● <namespace3\_name>.json

An example of this folder structure can be seen as in my demo website, which offers

translations in four languages. These translations are further divided into three

namespaces: header, footer, and main.



<a name="br7"></a> 

Essentially, namespaces in i18next are like categories or containers that group related

translation keys together. This organization makes it easier to manage translations,

especially as the project grows and becomes more complex. For example, in BB we can

create a separate namespace for each of the different components such as

Relationships, Attributes, Languages, Countries, etc.

This reduces the load on the server as namespaces are only loaded when a page

requires them.

# Demo Project

I have been experimenting with internationalization and here is a demo project in which

I implemented it using a simple React App and i18next. I was focusing mainly on the

working of translation. (Don't focus on the UI, it was built in just a couple of days).



<a name="br8"></a> 

[Github](https://github.com/aabbi15/bookbrainz-i18n-demo)[ ](https://github.com/aabbi15/bookbrainz-i18n-demo)[link](https://github.com/aabbi15/bookbrainz-i18n-demo)

[Demo](https://bookbrainz-i18n-demo.vercel.app/)[ ](https://bookbrainz-i18n-demo.vercel.app/)[link](https://bookbrainz-i18n-demo.vercel.app/)

# Translation Components

Here is the list of tentative components that will be set up for translation as of now.

***Area***

All the lists of places to display the birth/death places of the author and the place where

a publisher is registered.

***Entities***

The entities - author, work, edition, edition group, publisher and series, and the way they

are linked together allow us to describe what "a book" really is. So the translation of

their name and description is essential.

***Glossary***

This includes different terms along with their meanings mentioned [here](https://bookbrainz-user-guide.readthedocs.io/en/latest/glossary/).



<a name="br9"></a> 

***Languages***

This denotes the language that a book was written in.

***Server***

This denotes the messages and alerts shown on the screen to users by the BB server.

***Work types***

It contains all the types of work you can assign to a work/book. Also includes their

description. Reference given below -

***Relationship Names***

Includes only the different relationship names as mentioned [here](https://bookbrainz.org/relationship-types).



<a name="br10"></a> 

***Relationship Descriptions***

This includes all the additional details for the relationships. Reference given below -

***Achievements and Profile***

It includes all the achievements from [Achievement_type](https://bookbrainz.org/editor/3148/achievements)[ ](https://bookbrainz.org/editor/3148/achievements)as well as the profile details of

each user.For example the attributes of this user:



<a name="br11"></a> 

# Setting up Weblate

***Create a new weblate project***

On the existing weblate server of MetaBrainz (<https://translations.metabrainz.org/>), we

will create a new project for Bookbrainz.

***Connect it to the BB Github Repository***

We will create a new component and then link it to our github repository as follows. A

new branch for managing these translations will also be required. Afterwards an SSH

key will need to be added for authentication purposes.



<a name="br12"></a> 

***Adding all the valid Components to weblate***

Upon setting up the github repository, we will start to add the agreed upon components

to Weblate for the translators to see. The content will also be need to be added

manually later on.

***Workflow***

The workflow for adding new translations is as follows:

1\. There will be two locales directories - one specifically for devs(locales-dev) and

one for the frontend code and weblate(locales).

2\. The devs will update the translation files and push the code in the locales-dev

directory which will be copy pasted into the locales directory in chunks.

3\. Weblate will automatically update from the locales directory because of the

connected webhook.

4\. The translators keep on working and their translations will be added to the

locales directory upon approval.

5\. The website will load translations from the locales directory, so that newly added

translations can also be seen.

6\. And REPEAT

# Timeline

➢ **May 1 - May 26: Community Bonding period**

○ Trying to understand the exact details of the project as well as requirements from

this project.

○ Understanding the codebase and its functionalities even better by diving deep

into it.

○ Connecting with monkey and other project mentors to discuss about the project

and in general the future of MetaBrainz.



<a name="br13"></a> 

➢ **May 27 - June 2: Coding period - Week 1**

○ Go through the documentation of i18next thoroughly.

○ Install the required libraries and check their version requirements.

○ Set up all the directories and files required for translation at their correct location.

○ Configure the i18next options correctly according to the required need and

initialize it.

➢ **June 3 - June 9 : Coding period - Week 2**

○ Identify all the user-facing text that needs translation.

○ Start marking the identified texts with t(‘ ’) tags from i18next

➢ **June 10 - June 16 : Coding period - Week 3**

○ Continue the marking of the identified text. Also keep the dynamic nature of some

texts in mind. For eg, gender and plurality.

➢ **June 17 - June 23 : Coding period - Week 4**

○ Go through the weblate documentation for configuration of github repository to

our weblate server.

○ Create a new Weblate project for BookBrainz in the existing server. Configure

project settings, permissions, and add the necessary components for translation.

➢ **June 24 - June 30 : Coding period - Week 5**

○ Setup the locales directory required for storing the translation files.

○ Parse the user-facing (now marked text) using i18next libraries to extract the text

in desired format.

○ Divide the said text into specific Components and add them to their .json files.

➢ **July 1 - July 7: Coding period - Week 6**



<a name="br14"></a> 

○ Finish setting up all the translation files in the locales folder according to their

respective components by dividing them into namespaces.

○ Create separate translation files and directories for different languages and

namespaces.

➢ **July 8 - July 14: Coding period - Week 7**

○ Buffer week

○ Prepare a mid-evaluation report

➢ **Mid Term Evaluation**

➢ **July 15 - July 21: Coding period - Week 8**

○ Merge the weblate server with the locales folder for translators to access the

translations.

○ Ensure the workflow for getting translations and implementing them in the server

is done correctly.

➢ **July 22 - July 28: Coding period - Week 9**

○ Work with translators to translate a subset of BookBrainz text into any target

language.

○ Test the internationalization workflow and ensure that translations are displayed

correctly in the application.

➢ **July 29 - September 4: Coding period - Week 10**

○ Buffer week

➢ **September 5 - September 11: Coding period - Week 11**

○ Continue testing the internationalization implementation.



<a name="br15"></a> 

○ Fix any required bugs and make any necessary adjustments based on feedback

from translators and the mentors.

○ Write tests for testing the translation files once they are imported from Weblate

➢ **September 12 - September 18: Coding period - Week 12**

○ Make sure to capture as much text as possible for translation.

○ Test the robustness of the workflow by evaluating with tests

○ Write documentation for this internationalization setup

➢ **Final Evaluation**

The buffer weeks are stored in case I fall behind schedule in any of the weeks.

Otherwise I would continue the work in order by doing the work for the upcoming week.

# About Me

Hey! I'm Abhishek Abbi, a BTech student at [DA-IICT](https://www.daiict.ac.in/). I'm all about diving deep into the

world of web development and bringing cool ideas to life. I'm part of the Google Student

Developers Club at my college, where we geek out on coding and collaborate on some

pretty awesome projects.

I've had the chance to intern as a full-stack developer at [Maitri](https://in.linkedin.com/company/maitrimanthanngo)[ ](https://in.linkedin.com/company/maitrimanthanngo)[Manthan](https://in.linkedin.com/company/maitrimanthanngo)[ ](https://in.linkedin.com/company/maitrimanthanngo)and [PGAGI](https://in.linkedin.com/company/pg-agi),

and let me tell you, it's been a blast! From brainstorming ideas to launching them into

the real world, I've learned a ton and had a lot of fun along the way.

When I'm not coding, you can find me on the football field or working out in the gym. I

find it really comforting to stay active. Plus, it's a great way to relax after a long day

behind the desktop!



<a name="br16"></a> 

**When did I first start programming?**

I first started programming when I was 16 years old, in my 10th grade. I found

programming very fascinating from what I was taught in my school and so

decided to join coaching classes to learn more about it. My first real coding

experience there was in C++, where I learnt the basics of data structures and

Object oriented programming.

Since then, it has been a really amazing journey towards cracking a good IT

college, learning web Development with React, making a ton of projects and now

contributing to open source.

**My contributions at BookBrainz**

I have been active in both the #bookbrainz and #metabrainz IRC channel from January.

Due to health issues, I was unavailable for a couple of weeks in between. SInce joining, my

main focus was getting to know the BB codebase and working structure really well. I have

also attended a few of the Monday weekly meetings that occur and shared my work

progress as well as gained insights from the devs.

I have worked on a few tickets until now and all of them have helped me in understanding

the BB code even better. The tickets focused on updating SQL databases, fixing a RegEx

bug in the code and also adding a new feature for allowing users to choose dimension units.

This was the first major Open Source Org that I have contributed to and so the learning was

hard but I believe I am up to speed with the codebase now to make even faster

contributions. Here are my PRs for BookBrainz along with a few tickets I have been working

on:

➢ [#1073](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[Add](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[begin](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[date](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[and](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[end](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[date](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[attribute](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[to](https://github.com/metabrainz/bookbrainz-site/pull/1073)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1073)[relationship](https://github.com/metabrainz/bookbrainz-site/pull/1073)

➢ [#1050](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[fix(revision):](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[Links](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[with](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[symbols](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[like](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[%](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[-](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[#](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[now](https://github.com/metabrainz/bookbrainz-site/pull/1050)[ ](https://github.com/metabrainz/bookbrainz-site/pull/1050)[work](https://github.com/metabrainz/bookbrainz-site/pull/1050)

➢ BB-490 [Allow](https://tickets.metabrainz.org/browse/BB-490)[ ](https://tickets.metabrainz.org/browse/BB-490)[attributes](https://tickets.metabrainz.org/browse/BB-490)[ ](https://tickets.metabrainz.org/browse/BB-490)[on](https://tickets.metabrainz.org/browse/BB-490)[ ](https://tickets.metabrainz.org/browse/BB-490)[relationships](https://tickets.metabrainz.org/browse/BB-490)

➢ BB-770 ["Stay](https://tickets.metabrainz.org/browse/BB-770)[ ](https://tickets.metabrainz.org/browse/BB-770)[on](https://tickets.metabrainz.org/browse/BB-770)[ ](https://tickets.metabrainz.org/browse/BB-770)[beta"](https://tickets.metabrainz.org/browse/BB-770)[ ](https://tickets.metabrainz.org/browse/BB-770)[style](https://tickets.metabrainz.org/browse/BB-770)[ ](https://tickets.metabrainz.org/browse/BB-770)[cookie](https://tickets.metabrainz.org/browse/BB-770)

➢ BB-620 [Allow](https://tickets.metabrainz.org/browse/BB-620)[ ](https://tickets.metabrainz.org/browse/BB-620)[measurements](https://tickets.metabrainz.org/browse/BB-620)[ ](https://tickets.metabrainz.org/browse/BB-620)[in](https://tickets.metabrainz.org/browse/BB-620)[ ](https://tickets.metabrainz.org/browse/BB-620)[more](https://tickets.metabrainz.org/browse/BB-620)[ ](https://tickets.metabrainz.org/browse/BB-620)[formats](https://tickets.metabrainz.org/browse/BB-620)

**Personal Projects and Experience**

I have been building projects since the past couple of years and here are a few of them:



<a name="br17"></a> 

● **Maitri Manthan Internships**: This website was a complete end to end project

built by me during my duration of internsip at Maitri Manthan Org. It offers

remote internship offers for people to contribute to the society. Check it out

live [here](https://maitrimanthan.vercel.app/)

● **PG-AGI website**: While I was working at this startup, I made a landing page

with call-booking features and other designs for them. YOu can check it out

live [here](https://pgagi.in/)

● **Portfolio**: This was my personal portfolio built using NextJS, Tailwind CSS,

NodeJS and other React frameworks for email service as well as UX/UI

components. You can see it live [here](https://abhishek-abbi.vercel.app/).

● There are many more projects including **React Apps**, **Python scripts** and

**Web-scraping apps** that I have made personally in my free time that you can

see in my portfolio mentioned above..

**What type of music do I listen to?**

I am really involved in almost all kinds of music. My favorite kind of music is mostly soft

songs with really good vocals. Some of my favorite singers include

● Ed Sheeran(b8a7c51f-362c-4dcb-a259-bc6e0095f0a6)

● Arijit Singh(ed3f4831-e3e0-4dc0-9381-f5649e9df221)

● Zayn Malik(985f7e6f-0a7e-4de7-b9ec-a5dac63cb2f7)

● Harry Styles(7eb1ce54-a355-41f9-8d68-e018b096d427)

I have also lately been getting into hip-hop a lot these days with tracks from these being

on my repeat list.

● Central Cee(b0337af1-8d93-4671-b6c9-ba306bf942bf)

● Dave(f93bac9e-b20a-403e-abc9-06a2fc151df1)

● KR$NA(86ba68eb-ea24-4e78-a009-b35e99cb6193)

Here’s a few of my all time favorite songs along with their MBIDs:

● Hotel California (b934e019-9426-4091-a1c4-6b7590dc6c47)

● Watermelon Sugar (803eb995-2b7b-4a35-8d11-db2c9ff54989)

● Sprinter (cd3bde26-2929-4404-86ef-4623e57b66cd)

● No Cap (cea2e106-7d27-4917-84da-f0ba99170b57)



<a name="br18"></a> 

● Tum Hi Ho (52ce59d7-9d12-405a-acbb-1e50970b81bb)

● Trampoline (04430b31-0159-4b3c-bf2b-a7ac806535dd)

● Shada (ea7cc5a7-2b89-4966-9903-1c1ee5a7cfe0)

**What type of books do I read?**

I mostly read self help books as I feel it helps me grow and become a better person.

Occasionally, I indulge in some short-fiction books and comic books just to relax my

mind for a while. Here’s some books which I have read along with their BBIDs:

● Atomic Habits (20055e91-d0e9-446b-a841-aafa3eff6441)

● The Psychology of Money (10fb9c4f-21b9-4c9c-9d7a-9aad275a7d31)

● Diary of a Wimpy Kid (ed472f1-ef3c-45cb-9350-f05aa065e86c)

● Deathnote Manga (8b467e1c-72e9-4654-9212-bb4559a8eec8)

**What about BookBrainz intrigues me the most?**

I feel that BookBrainz holds two important use cases that the users would benefit from:

\1) Sometimes I want to get resources about a book online but there are a lot of

different articles/blogs offering reviews. The articles can be biased sometimes

and I feel there is a need for all of this data to be concentrated into one place

where I can get the history, the facts, the reviews as well as the description in

one place.

\2) With the abundance of Ebooks and audiobooks in the market now\. Maintaining a

record of a book you have read/want to read would be much easier with the help

of software rather than a physical library.

\3) BookBrainz can also kind of serve as a platform to find people who read the

same books as you and connect to them. This can be done by checking out their

public Collections. This feature is really good for finding reading buddies.

I feel once BookBrainz is filled abundantly with a lot of data it will become a really

exciting platform for not only gathering book data but also to connect eith other fellow

book readers.



<a name="br19"></a> 

**Practical Requirements**

**My current computer during GSoc 2024**

I have a Samsung Galaxy Book 3 Pro 360 with a 13th Gen Intel(R) Core(TM) i7-1360P

2\.20 GHz Processor, 16 GB RAM, 1TB SSD, 64-bit operating system, x64-based processor,

pen and touch support which is running Windows 11.

**How much time will I dedicate?**

I will be on my college summer break during the coding period for GSoC, which starts from

May 27. So, this project will be my major focus during that period of time.Hence, I will be

able to dedicate around 25-30 hours per week for the project.

This Is a tentative proposal and I would love some improvements/feedback from your side.



<a name="br20"></a> 

