# markdown-it-apexcharts

 __[ApexCharts](https://apexcharts.com/)__ plugin for markdown-it.


## Installation
    npm install markdown-it-apexcharts
    
    
## Usage
```js
    import markdownIt from 'markdown-it'
    import markdownItApexCharts , {Apexrender} from 'markdown-it-apexcharts'
    
    const md = markdownIt();
    md.use(markdownItMermaid);
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
    ApexRender();
```
    
above codes create div element with class "apexcharts".  \
To see a Apexcharts , you have to call render method ( ex: chart.render()) \
That is why I created ApexRender function to call render method for every div element with class 'apexcharts' \


    

    
 ### reference
 Inspired by __[markdown-it-mermaid](https://github.com/tylingsoft/markdown-it-mermaid)__ by tylingsoft
