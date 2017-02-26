# vue_extract_text_demo
html-webpack-plugin和extract-text-webpack-plugin配合，提取css，link到页面

官方说明：  
It moves every require("style.css") in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but separate in a CSS bundle file (styles.css).   

要使用extract-text-webpack-plugin，必须要有 require('[name].css'); 语句。  
extract-text-webpack-plugin 提取处理的是，require语句的css。
