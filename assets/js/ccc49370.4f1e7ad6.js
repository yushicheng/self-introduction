"use strict";(self.webpackChunkself_introduction=self.webpackChunkself_introduction||[]).push([[103],{46165:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(63366),l=a(67294),r=a(86010),i=a(73938),s=a(36742),m="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(24973);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,n.Z)(e,h),o=t&&t.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},94884:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(67294),l=a(86010),r=a(3905),i=a(24973),s=a(36742),m=a(44996),o=a(63773),c=a(54155),d=a(86146),u="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",v=a(87682),h="image_1yU8";var E=function(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},b="authorCol_1R69";function f(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return n.createElement("div",{className:(0,l.Z)("col col--6",b),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}var _=function(e){var t,a,h,E,b=(h=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,m.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,C=e.truncated,L=e.isBlogPostPage,T=void 0!==L&&L,w=P.date,x=P.formattedDate,y=P.permalink,I=P.tags,H=P.readingTime,M=P.title,A=P.editUrl,U=P.authors,B=null!=(t=k.image)?t:Z.image,R=!T&&C,O=I.length>0;return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=T?"h1":"h2",n.createElement("header",null,n.createElement(E,{className:u,itemProp:"headline"},T?M:n.createElement(s.Z,{itemProp:"url",to:y},M)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},x),void 0!==H&&n.createElement(n.Fragment,null," \xb7 ",b(H))),n.createElement(f,{authors:U,assets:k}))),B&&n.createElement("meta",{itemProp:"image",content:_(B,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:c.Z},N)),(O||C)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=T,a))},O&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":R})},n.createElement(v.Z,{tags:I})),T&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:A})),R&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":O})},n.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},84147:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),l=a(41217),r=a(46165),i=a(94884),s=a(24973),m=a(36742);var o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(63773),d=a(67588);var u=function(e){var t,a=e.content,s=e.sidebar,m=a.frontMatter,u=a.assets,g=a.metadata,p=g.title,v=g.description,h=g.nextItem,E=g.prevItem,b=g.date,f=g.tags,_=g.authors,N=m.hide_table_of_contents,Z=m.keywords,k=m.toc_min_heading_level,P=m.toc_max_heading_level,C=null!=(t=u.image)?t:m.image;return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:s,toc:!N&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:p,description:v,keywords:Z,image:C},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),f.length>0&&n.createElement("meta",{property:"article:tag",content:f.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:m,assets:u,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(h||E)&&n.createElement(o,{nextItem:h,prevItem:E}))}},86146:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(24973),r=a(87462),i=a(63366),s=a(86010),m="iconEdit_2_ui",o=["className"],c=function(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(63773);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},25002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(87462),l=a(63366),r=a(67294),i=a(63773),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,s),E=(0,i.LU)(),b=null!=p?p:E.tableOfContents.minHeadingLevel,f=null!=v?v:E.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),N=(0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:b,maxHeadingLevel:f}}),[d,g,b,f]);return(0,i.Si)(N),r.createElement(m,(0,n.Z)({toc:_,className:o,linkClassName:d},h))}},67588:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(63366),r=a(67294),i=a(86010),s=a(25002),m="tableOfContents_35-E",o=["className"];var c=function(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(m,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},37211:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(86010),r=a(36742),i="tag_1Okp",s="tagRegular_3MiF",m="tagWithCount_1HU1";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!c,t[m]=c,t))},o,c&&n.createElement("span",null,c))}},87682:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(86010),r=a(24973),i=a(37211),s="tags_2ga9",m="tag_11ep";function o(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:m},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);