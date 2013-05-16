var responseBodyEditor = ace.edit('response-body-editor');
var methodResponseEditor = ace.edit('method-response-editor');
var responseHeadersEditor = ace.edit('response-headers-editor');

(function CreateResources() {
    var formatMode = {
        'xml': 'xml',
        'csv': 'text',
        'json': 'json',
        'html': 'html',
        'atom': 'xml',
        'txt': 'text',
        'rss': 'xml',
        'md': 'markdown'
    };

    responseBodyEditor.getSession().setMode(
        'ace/mode/' + formatMode[$('#format').val()]);
    methodResponseEditor.getSession().setMode('ace/mode/json');

    $('#category').focus();
    $('#define-in-json').popover({'trigger': 'hover', 'html': true});
    $('#jsonrpc').popover({'trigger': 'hover', 'html': true,
                           'delay': {'show': 0, 'hide': 2000}});

    $('#format').change(function() {
        responseBodyEditor.getSession().setMode(
            'ace/mode/' + formatMode[$(this).val()]);
    });

    $('#rest-form').submit(function(event) {

        if (!responseBodyEditor.getValue()) {
            alert("Response body can't be empty.");
            event.preventDefault();
            return;
        }

        $('#response_body').val(responseBodyEditor.getValue());
        $('#response_headers').val(responseHeadersEditor.getValue());
    });

    $('#rpc-form').submit(function(event) {

        if (!methodResponseEditor.getValue()) {
            alert("Method response can't be empty.");
            event.preventDefault();
            return;
        }

        $('#method_response').val(methodResponseEditor.getValue());
    });

    $('.protocol').click(function() {
        $('form').addClass('hidden');
        $('#'+$(this).val()+'-form').removeClass('hidden');
    });
})();
