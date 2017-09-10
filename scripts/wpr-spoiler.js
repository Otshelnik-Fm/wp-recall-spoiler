(function() {
    tinymce.PluginManager.add('wprs_spoiler', function( editor, url ) {
        editor.addButton( 'wprs_spoiler', {
            title: 'WP-Recall Spoiler',
            icon: 'icon wpr_spoiler',
            onclick: function() {
                editor.insertContent('<details><summary>Спойлер</summary>Контент</details>');
            }
        });
    });
})();