
// ����׼���õ�dom����ʼ��echartsʵ��
        var myChart = echarts.init(document.getElementById('main'));

        // ָ��ͼ���������������
        var option = {
            title: {
                text: 'ECharts ����ʾ��'
            },
            tooltip: {},
            legend: {
                data:['����']
            },
            xAxis: {
                data: ["����","��ë��","ѩ����","����","�߸�Ь","����"]
            },
            yAxis: {},
            series: [{
                name: '����',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // ʹ�ø�ָ�����������������ʾͼ����
        myChart.setOption(option);