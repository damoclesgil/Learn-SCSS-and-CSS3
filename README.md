# Getting Start
![sass.jpg](assets/images/sass.jpg)

1. [Install Ruby](http://rubyinstaller.org/)
2. Open Command Prompt With Ruby 

## CLI
Install
```
$ gem install sass
```
Compile SASS
```
$ sass style.scss     
```
Create a version of CSS
```
$ sass style.scss:style.css    
```    
Create a version of CSS and alterate in RunTime
```
$ sass --watch style.scss:style.css   
``` 

## More CSS3
https://tympanus.net/codrops/css_reference/

https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Reference

http://bit.ly/palermo4css3

http://www.w3.org/Style/CSS/

http://html5please.us/#css

http://www.modernizr.com

http://bit.ly/css3-msdn

http://www.css3maker.com


## More SASS
[SASS](https://github.com/sass/sass)

[SASS & LESS](https://gist.github.com/chriseppstein/674726)

# Learn SCSS With ITCSS
How do I make my CSS scalable and maintainable? It’s a concern for every front-end developer. ITCSS has an answer.

## What is ITCSS?
ITCSS (SCALABLE AND MAINTAINABLE CSS ARCHITECTURE) stands for Inverted Triangle CSS and it helps you to organize your project CSS files in such way that you can better deal with (not always easy-to-deal with) CSS specifics like global namespace, cascade and selectors specificity.


![triangle.png](assets/images/triangle.png)

Those layers are as follows:

- Settings – used with preprocessors and contain font, colors definitions, etc.
- Tools – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- Generic – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
- Elements – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
- Objects – class-based selectors which define undecorated design patterns, for example media object known from OOCSS
- Components – specific UI components. This is where majority of our work takes place and our UI components are often composed of Objects and Components
- Trumps – utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class

## More ITCSS
- [Slide ITCSS](http://slides.com/vazdanilo/organizacao-css#/31)
- [Documentation](http://itcss.io/)
- [Live Reload](https://marketplace.visualstudio.com/items?itemName=bajdzis.vscode-refresh-html)