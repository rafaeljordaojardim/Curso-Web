import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 500

function filterByCity(city) {
    $('[wm-city]').each(function(index, element) {
        const isTarget = $(this).attr('wm-city') ===
            city || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function() {

    //para nao ter repetições
    const cities = new Set
    $('[wm-city]').each(function(index, element) {
        cities.add($(element).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(e => {
            $(e.target).parent().find('button').each((i, e) => $(e).removeClass('active'))
            $(e.target).addClass('active')
            filterByCity(city)
        })
        return btn
    })
    const btnAll = $('<button>').addClass(['btn', 'btn-info']).html('Todas')
    btnAll.click(e => {
        $(e.target).parent().find('button').each((i, e) => $(e).removeClass('active'))
        $(e.target).addClass('active')
        filterByCity(null)
    })
    btnAll.addClass('active')
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this


}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons()
})