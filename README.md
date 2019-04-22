# markdown-it-apexcharts

 __[ApexCharts](https://apexcharts.com/)__ plugin for markdown-it.   __[DemoApp](https://build-7r980umqa.now.sh/)__


## Demo
__[DemoApp](https://build-7r980umqa.now.sh/)__  \
Copy and paste \
```js
  ```apex
  {
      "chart": {
        "type": "area"
      },
      "series": [{
        "name": "sales",
        "data": [30,40,45,50,49,60,70,91,125]
      }],
      "xaxis": {
        "type": "datetime",
        "categories": ["01/01/1991","01/01/1992","01/01/1993","01/01/1994","01/01/1995","01/01/1996","01/01/1997", "01/01/1998","01/01/1999"]
      }
  }
  ```
```

It should start with  \```apex  + JSON + ```


## Installation
    npm install markdown-it-apexcharts
    
    
## Usage
```js
    import markdownIt from 'markdown-it'
    import markdownItApexCharts , {Apexrender} from 'markdown-it-apexcharts'
    
    const md = markdownIt();
    md.use(markdownItMermaid);
    // below code creates <div class='apexcharts' data-options=INPUT_JSON></div>
    md.render(`\`\`\`apex
    {
         "chart": {
           "type": "area"
         },
         "series": [{
           "name": "sales",
           "data": [30,40,45,50,49,60,70,91,125]
         }],
         "xaxis": {
           "type": "datetime",
           "categories": ["01/01/1991","01/01/1992","01/01/1993","01/01/1994","01/01/1995","01/01/1996","01/01/1997",         "01/01/1998","01/01/1999"]
         }
    }   
    \`\`\``);
    
    // important!
    // finds all div with class 'apexcharts' and render them based on JSON from their data-option attribute
    // if you are using react , call ApexRender() in componentDidMount() or UseEffect()
    // anyway it has to be called after div element is created
    ApexRender();
```
    
above code creates div element with class "apexcharts".  \
To render Apexcharts , you have to call render method ( ex: chart.render()) \
That is why I created ApexRender function to call render method for every div element with class 'apexcharts' \
if you are using react , call ApexRender() in componentDidMount() or UseEffect() \
anyway it has to be called after div element is created


    

    
 ### reference
 Inspired by __[markdown-it-mermaid](https://github.com/tylingsoft/markdown-it-mermaid)__ by tylingsoft
