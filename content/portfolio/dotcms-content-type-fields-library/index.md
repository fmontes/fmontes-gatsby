---
title: DotCMS Content Type Fields Library
description: Create a Web Component Library for Form Fields
tech: StencilJS, Web Components, SASS
date: '2019-06-01'
---

DotCMS helps you manage and deliver content across all channels, devices, and platforms. 

As a CMS, in DotCMS you can create content types and add fields to them, there are around 24 types of fields users can create in a DotCMS content type.

### Challenge
We needed to create reusable UI components for each field and we need them to be framework agnostic.

### Solution
Web Components is the native solution to create reusable UI components.  

You can create Custom Elements with Angular, Vue and other Javascript frameworks, we decided to go with StencilJS because is aimed specifically for this purpose and in our proof of concepts works really well, some of its features are:

* Asynchronous rendering pipeline
* TypeScript support
* One-way Data Binding
* Component pre-rendering
* JSX support

### Benefits
I and the team were able to pick up into this tech really quick, it works really similar to ReactJS and the tooling is amazing which allow us to have a v1 in about 2 months of work, all unit and e2s tested and ready to use.

### Results
Is not released yet but our internal testing has shown really good results:

* Fast rendering
* Easy to scale
* Native support
* Work perfectly with Angular and ReactJS
* CSS stylable