$(function () {
    console.log(2222222222222)
    $('.orderdetail #alipay').click(function () {
        console.log(11111111111111)
        // 发起支付请求
        request_data = {
            'orderid': $(this).attr('data-orderid')
        }
        $.get('/pay/', request_data, function (response) {
            console.log(response)
            if (response.status == 1){
                window.open(response.alipayurl, target='_self')
            }
        })
    })

})