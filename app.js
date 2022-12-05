const navbar = document.querySelector('nav');
const template = document.createElement('template');

template.innerHTML=`
    <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="resources.html">Resources</a></li>
    <li><a href="news.html">News</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="testimonials.html">Testimonials</a></li>
    <li><a href="faq.html">FAQ</a></li>
    </ul>
`;

navbar.appendChild(template.content);