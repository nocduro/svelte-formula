(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(94)),i={id:"formula",title:"Formula API",sidebar_label:"Formula API"},l={unversionedId:"formula",id:"formula",isDocsHomePage:!1,title:"Formula API",description:"svelte-formula",source:"@site/docs/formula.md",slug:"/formula",permalink:"/docs/formula",version:"current",sidebar_label:"Formula API",sidebar:"someSidebar",next:{title:"Formula Options",permalink:"/docs/options"}},c=[{value:"What is Formula?",id:"what-is-formula",children:[{value:"Working with Data Collections",id:"working-with-data-collections",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Basic Form Example",id:"basic-form-example",children:[]}],s={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/svelte-formula"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/svelte-formula?label=svelte-formula",alt:"svelte-formula"}))),Object(o.b)("h2",{id:"what-is-formula"},"What is Formula?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Formula is still in active development - as such there may still be API changes"))),Object(o.b)("p",null,"Formula is a library for ",Object(o.b)("a",{parentName:"p",href:"https://svelte.dev"},"Svelte")," with features for creating ",Object(o.b)("strong",{parentName:"p"},"Zero Configuration")," reactive forms\nand fully data-driven applications."),Object(o.b)("p",null,"Out-of-the box it's designed to work with HTML5 forms. Using the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," attribute of your HTML elements, Formula builds\na set of state objects using Svelte's subscribable ",Object(o.b)("a",{parentName:"p",href:"/docs/stores/stores"},"stores"),", making them available for you subscribe\nto in your application. These stores contain values and validation states, which are configured as easily as setting\nsupported attributes, and doesn't get in the way of things like Accessibility."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Want to make a field required? Just add the ",Object(o.b)("inlineCode",{parentName:"p"},"<input required>")," attribute, or add ",Object(o.b)("inlineCode",{parentName:"p"},'<input minlength="8">')," to set a minimum length on the fields.")),Object(o.b)("p",null,"Validation is enhanced via custom field and form level validation functions passed in the ",Object(o.b)("a",{parentName:"p",href:"/docs/options"},"options")," - you\ncan also pass default values, or override default HTML5 validation text with your own versions (such as localised text)."),Object(o.b)("p",null,"You can also enrich you fields with computed values (such as a password strength derived from the users input)."),Object(o.b)("h3",{id:"working-with-data-collections"},"Working with Data Collections"),Object(o.b)("p",null,"Formula also provides an API for working with collections of data - ",Object(o.b)("a",{parentName:"p",href:"/docs/groups/beaker"},"beaker")," allows you to use Formula to\ncreate rich row-level forms for applications such as data grids."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Formula is available on NPM, with the source available on GitHub. To install in your project type:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"npm i svelte-formula"))),Object(o.b)("h2",{id:"basic-form-example"},"Basic Form Example"),Object(o.b)("p",null,"To use in your project all you need is an element container binding the form with\nSvelte ",Object(o.b)("a",{parentName:"p",href:"https://svelte.dev/docs#use_action"},"use"),"\ndirective, and form input fields with their ",Object(o.b)("inlineCode",{parentName:"p"},"name")," property set."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-svelte"},'  <script>\n    import { formula } from \'svelte-formula\'\n    const { form, formIsValid, validity, touched } = formula();\n\n    // Here we can provide a default value\n    export let projectname = \'\';\n\n    // You can calculate values for valid UI states\n    $: projectNameInvalid = $touched?.projectName && validity?.projectName?.invalid\n  <\/script>\n\n  <div use:form>\n    <label for="project-name">Project Name</label>\n    <input type="text" name="projectName" required minlength="8" class:error={projectNameInvalid} bind:value={projectName} />\n    <span hidden={!projectNameInvalid}>{validity?.projectName?.message}</span>\n    <button disabled={!$formIsValid}>Update Project Name</button>\n  </div>\n')))}u.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);