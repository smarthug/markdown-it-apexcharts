import ApexCharts from 'apexcharts'



const ApexPlugIn = (md, opts) => {

    const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules);

    md.renderer.rules.fence = (tokens, idx, opts, env, self) => {
        const token = tokens[idx]
        const code = `${token.info} \n ${token.content.trim()}`
        const tmp = token.content.trim()
        console.log(code)
        if (token.info === 'apex') {


            try {
                //var prettytmp = tmp.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":').replace("'" , "\"");
                //console.log(prettytmp)
                //console.log(JSON.stringify(tmp).replace(/\\n/g, '').replace(/([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)/g, "\"$1\":\"$2\""))
                const json = JSON.parse(tmp);
                // console.log(json)
                var ApexChartsId = 'Apex' + Math.floor(Math.random() * 100) + 1
                //data-options=${JSON.stringify(json)}
                return `<div class="apexChart" data-options=${JSON.stringify(json)}  id=${ApexChartsId}  ></div>`



            } catch (err) {
                console.log(err)
                return `<pre>${err}</pre>`
            }
        }

        return defaultRenderer(tokens, idx, opts, env, self)
    }
}




export const ApexRender = () => {
    var charts = document.querySelectorAll(".apexChart")
    if(charts != null){

        charts.forEach((el, index) => {
            var options = JSON.parse(el.dataset.options)
            var chart = new ApexCharts(el, options);
            chart.render()
        })
    }
}

export default ApexPlugIn





// var testOptions = {
//     "chart": {
//       "type": "area"
//     },
//     "series": [{
//       "name": "sales",
//       "data": [30,40,45,50,49,60,70,91,125]
//     }],
//     "xaxis": {
//       "type": "datetime",
//       "categories": ["01/01/1991","01/01/1992","01/01/1993","01/01/1994","01/01/1995","01/01/1996","01/01/1997", "01/01/1998","01/01/1999"]
//     }
// }