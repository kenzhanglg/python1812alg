$(function () {
    total()
    alltotal()

    $(' .cartlist_info_choose').click(function () {
        var $span = $(this).find('span')
        request_data = {
            'cartid': $(this).attr('data-cardid')
        }
        $.get('/changecartselect/', request_data, function (response) {
            console.log(response)
            if (response.status == 1) {
                if (response.isselect) {
                    $span.removeClass('no').addClass('glyphicon glyphicon-ok')
                } else {
                    $span.removeClass('glyphicon glyphicon-ok').addClass('no')
                }
            }
            alltotal()
        })
    })

    $('.info_num .addnum').click(function () {
        request_data = {
            'goodsid': $(this).attr('data-goodsid'),
            'cartid': $(this).attr('data-cartid'),
        }
        var $addnum = $(this)
        var cartnumber = $(this).prev().html()
        console.log(cartnumber)
        $.get('/addnum/', request_data, function (response) {
            console.log(response)

            if (response.status == 1) {
                // if ($addnum.prev().prev().html )
                $addnum.prev().prev().show()
                var new_cart_number = parseInt(cartnumber) + 1
                console.log(new_cart_number)
                $addnum.prev().html(new_cart_number)
                total()
                alltotal()


            }
        })
    })

    $('.info_num .subnum').click(function () {
        var $that = $(this)

        request_data = {
            'goodsid': $(this).attr('data-goodsid'),
            'cartid': $(this).attr('data-cartid'),
        }
        var $subnum = $(this)
        var cartnumber = $(this).next().html()
        console.log(cartnumber)
        if (cartnumber < 2) {
            $subnum.hide()
        }
        $.get('/subnum/', request_data, function (response) {
            console.log(response)
            var new_cart_number = parseInt(cartnumber) - 1
            console.log(new_cart_number)
            $subnum.next().html(new_cart_number)
            if (new_cart_number < 2) {
                $subnum.hide()
            }
            total()
            alltotal()

        })
    })

    $('.cartlist_info .cartlist_info_handle').click(function () {
        var $that = $(this)
        request_data = {
            'cartid': $(this).attr('data-cartid'),
        }
        $.get('/delcart/', request_data, function (response) {
            console.log(response)
            if (response.status == 1) {
                window.open('/cart/', '_self')
            }
        })
    })
    $('.goBuy .goBuy_l .delcartall').click(function () {
        $.get('/delcartall/', function (response) {
            console.log(response)
            if (response.status == 1) {
                window.open('/cart/', '_self')
            }
        })


    })
    $('.goBuy .goBuy_l .selectall').click(function () {
        var isall = $(this).attr('data-all')
        $span = $(this).find('span')
        isall = (isall == 'false') ? true : false
        $(this).attr('data-all', isall)

        if (isall) {
            $span.removeClass('no').addClass('glyphicon glyphicon-ok')
        } else {
            $span.removeClass('glyphicon glyphicon-ok').addClass('no')
        }

        request_data = {
            'isall': isall
        }
        $.get('/changecartselectall/', request_data, function (response) {
            console.log(response)

            if (response.status == 1) {
                $('.cartlist_info_choose').each(function () {
                    if (isall) { // 全选
                        $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
                        alltotal()
                    } else {    // 取消全选
                        $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
                        alltotal()
                    }


                })
            }
        })
    })


    function total() {
        var sum = 0
        // 优惠价格
        var salesum = 0
        $('.cartlist_info').each(function () {
            var oldprice = $(this).find('.cartlist_info_cheap').attr('data-oldprice')
            var price = $(this).find('.cartlist_info_singleprice').attr('data-price')
            var num = $(this).find('.cartlist_goods_num').html()
            sum = num * price
            salesum = oldprice - price
            $(this).find('.cartlist_info_total span').html(sum)
            $(this).find('.cartlist_info_cheap b').html(salesum)
            if (parseInt($(this).find('.cartlist_goods_num').html()) < 2) {
                $(this).find('.subnum').hide()
            }

        })
    }


    function alltotal() {
        var sums = 0
        $('.cartlist_info').each(function () {
            var chose = $(this).find('.cartlist_info_choose')
            if (chose.find('.glyphicon').length) {
                var sum = $(this).find('.cartlist_info_total span').html()
                sums += parseInt(sum)
            }

        })
        $('.goBuy .buy_total span').html(sums)

    }


})
