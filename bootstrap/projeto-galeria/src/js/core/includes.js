import $ from 'jquery'

const loadHtmlSucessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if (!loadHtmlSucessCallbacks.includes(callback)) {
        loadHtmlSucessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if (!parent) parent = 'body';
    $(parent).find('[wm-include]').each(function(index, element) {
        const url = $(element).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(element).html(data)
                $(element).removeAttr('wm-include')

                loadHtmlSucessCallbacks.forEach(callback => callback(data))
                loadIncludes(element)
            }
        })
    })
}


loadIncludes()