document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    if (typeof jurusanData === 'undefined') {
        console.error('jurusanData is not defined');
        return;
    }
    console.log('Jurusan Data:', jurusanData);
    try {
        Highcharts.chart('pie-chart-container', {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Distribusi Jurusan Mahasiswa'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Jurusan',
                colorByPoint: true,
                data: jurusanData
            }]
        });
    } catch (error) {
        console.error('Error creating chart:', error);
    }
});