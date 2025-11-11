// Keep only the original functions from index.html

class ReconTools {

        constructor() {

            this.validateDomain = this.validateDomain.bind(this);

            this.initializeEventListeners();

        }



        initializeEventListeners() {

            document.addEventListener('DOMContentLoaded', () => {

                this.setupDomainInput();

            });

        }



        setupDomainInput() {

            const input = document.getElementById('targetDomain');

            if (input) {

                input.addEventListener('input', () => {

                    this.validateDomain(input.value);

                });

            }

        }



        validateDomain(domain) {

            if (!domain) {

                this.showError('Please enter a domain');

                return false;

            }



            const pattern = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

            if (!pattern.test(domain)) {

                this.showError('Please enter a valid domain');

                return false;

            }



            return true;

        }



        getDomain() {

            const domain = document.getElementById('targetDomain')?.value.trim();

            if (!domain) {

                this.showError('Please enter a domain');

                return null;

            }

            return this.sanitizeDomain(domain);

        }



        sanitizeDomain(domain) {

            return domain.replace(/^https?:\/\//, '').replace(/\/$/, '');

        }



        showError(message) {

            this.removeExistingErrors();



            const errorDiv = document.createElement('div');

            errorDiv.className = 'alert alert-danger error-message';

            errorDiv.style.cssText = `

                position: fixed;

                top: 80px;

                left: 50%;

                transform: translateX(-50%);

                z-index: 1050;

                padding: 12px 20px;

                border-radius: 6px;

                background: var(--danger);

                color: white;

                font-weight: 500;

                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

                opacity: 0;

                transition: opacity 0.3s ease;

            `;

            

            errorDiv.textContent = message;

            document.body.appendChild(errorDiv);



            setTimeout(() => {

                errorDiv.style.opacity = '1';

            }, 10);



            setTimeout(() => {

                errorDiv.style.opacity = '0';

                setTimeout(() => {

                    if (errorDiv.parentNode) {

                        errorDiv.remove();

                    }

                }, 300);

            }, 3000);

        }



        removeExistingErrors() {

            const existingErrors = document.querySelectorAll('.error-message');

            existingErrors.forEach(error => error.remove());

        }



        executeToolSearch(url, toolName) {

            const domain = this.getDomain();

            if (!domain) return;

            

            try {

                const finalUrl = url.replace(/example\.com/g, domain);

                window.open(finalUrl, '_blank');

            } catch (error) {

                this.showError(`Failed to execute ${toolName}: ${error.message}`);

            }

        }

    }



    const reconTools = new ReconTools();



    // Original functions from index.html

    function subdomainDork(url) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(url.replace('example.com', domain), '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function gitDork(url) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(url.replace('example.com', domain), '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function techDork(url) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(url.replace('example.com', domain), '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function portDork(url) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(url.replace('example.com', domain), '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function urlDork(url) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(url.replace('example.com', domain), '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function cmsDork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://www.google.com/search?q=${query.replace('example.com', domain)}`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function directoryDork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(`https://www.google.com/search?q=${query.replace('example.com', domain)}`, '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function vulnDork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://www.google.com/search?q=${query.replace('example.com', domain)}`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function s3Dork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(`https://www.google.com/search?q=${query.replace('example.com', domain)}`, '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function whoisLookup() {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://whois.domaintools.com/${domain}`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function dnsInfo() {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(`https://dnsdumpster.com/?q=${domain}`, '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function checkSSL() {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://www.ssllabs.com/ssltest/analyze.html?d=${domain}`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function reverseIP() {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(`https://viewdns.info/reverseip/?host=${domain}&t=1`, '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function asnLookup() {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://bgp.he.net/search?search%5Bsearch%5D=${domain}&commit=Search`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function robotsTxt() {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(`https://${domain}/robots.txt`, '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function codeDork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://www.google.com/search?q=${query.replace('example.com', domain)}`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function apiDork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {
            
            window.open(`https://www.google.com/search?q=${query.replace('example.com', domain)}`, '_blank');

            } else {

            alert('Please enter a domain!');

        }

    }



    function cloudDork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://www.google.com/search?q=${query.replace('example.com', domain)}`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function devDork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://www.google.com/search?q=${query.replace('example.com', domain)}`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function secretsDork(query) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(query.replace('example.com', domain))}`, '_blank');

        } else {

            alert('Please enter a domain!');

        }

    }



    function allDork(dork) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            const finalDork = dork.replace('example.com', domain);

            
            
            if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {

                window.open(finalDork, '_blank');

            } else {

                window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');

            }

        } else {

            alert('Please enter a domain!');

        }

    }



    function genericDork(dork) {

        const domain = document.getElementById('targetDomain').value;

        if (domain) {

            let finalDork = dork.replace(/example\.com/g, domain);

            
            
            if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {

                window.open(finalDork, '_blank');

            } else {

                window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');

            }

        } else {

            alert('Please enter a domain!');

        }

    }



    function cveDork(dork) {

        const cve = document.getElementById('searccve').value;

        if (cve) {

            const finalDork = dork.replace('example.com', cve);

            
            
            if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {

                window.open(finalDork, '_blank');

            } else {

                window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');

            }

        } else {

            alert('Please enter a CVE!');

        }

    }



    function getKeywordss(){

        const url = document.getElementById('urla').value;

        if (!url) {

            alert('Please enter a payloads URL!');

            return;

        }

        fetch(url)

            .then(response => response.text())

            .then(data => {

                document.getElementById('keywords1').value = data;

            })

            .catch(error => {

                alert('Failed to load payloads: ' + error.message);

            });

    }



    function Generate(){

        const resultsDiv = document.getElementById('results');

        resultsDiv.innerHTML = '';

        const keywords = document.getElementById('keywords1').value;

        const target = document.getElementById('targets').value;

        

        if (!keywords) {

            alert('Please enter or load payloads first!');

            return;

        }

        

        if (!target) {

            alert('Please enter a target!');

            return;

        }

        

        const keywordList = keywords.split('\n').filter(k => k.trim() !== '');

        

        keywordList.forEach(function(keyword) {

            const link = `https://github.com/search?q=${encodeURIComponent(target + ' ' + keyword.trim())}&type=Code`;

            const checkbox = document.createElement('input');

            checkbox.type = 'checkbox';

            checkbox.style.marginRight = '8px';

            const anchor = document.createElement('a');

            anchor.href = link;

            anchor.target = '_blank';

            anchor.textContent = keyword.trim();

            anchor.style.color = 'var(--primary)';

            anchor.style.textDecoration = 'none';

            anchor.style.display = 'block';

            anchor.style.padding = '4px 0';

            anchor.style.fontSize = '0.85rem';

            

            anchor.addEventListener('mouseenter', function() {

                anchor.style.textDecoration = 'underline';

            });

            anchor.addEventListener('mouseleave', function() {

                anchor.style.textDecoration = 'none';

            });

            

            const container = document.createElement('div');

            container.style.display = 'flex';

            container.style.alignItems = 'center';

            container.style.marginBottom = '4px';

            container.appendChild(checkbox);

            container.appendChild(anchor);

            resultsDiv.appendChild(container);

        });

    }



    // Initialize animations

    document.addEventListener('DOMContentLoaded', function() {

        const cards = document.querySelectorAll('.card');

        cards.forEach((card, index) => {

            card.classList.add('animate-on-scroll');

            card.style.setProperty('--animation-order', index);

        });



        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add('animated');

                    }

                });

            },

            { threshold: 0.1 }

        );



        cards.forEach((card) => observer.observe(card));

    });



    // Sparking Particle Animation System

    class SparkAnimation {

        constructor() {

            this.lastMouseX = 0;

            this.lastMouseY = 0;

            this.trailInterval = null;

            this.init();

        }



        init() {

            // Mouse move spark trail

            document.addEventListener('mousemove', (e) => {

                this.createSparkTrail(e.clientX, e.clientY);

                this.lastMouseX = e.clientX;

                this.lastMouseY = e.clientY;

            });



            // Button click burst effect

            document.querySelectorAll('.btn-tool').forEach(button => {

                button.addEventListener('click', (e) => {

                    const rect = button.getBoundingClientRect();

                    const x = rect.left + rect.width / 2;

                    const y = rect.top + rect.height / 2;

                    this.createBurst(x, y, 12);

                });

            });



            // Card hover spark effect

            document.querySelectorAll('.card').forEach(card => {

                card.addEventListener('mouseenter', (e) => {

                    const rect = card.getBoundingClientRect();

                    const x = rect.left + rect.width / 2;

                    const y = rect.top + rect.height / 2;

                    this.createBurst(x, y, 8);

                });

            });



            // Continuous spark trail (optional - can be toggled)

            this.startTrail();

        }



        createSparkTrail(x, y) {

            // Create main spark

            const spark = document.createElement('div');

            spark.className = 'spark-particle';

            spark.style.left = x + 'px';

            spark.style.top = y + 'px';



            // Random direction for spark movement

            const angle = Math.random() * Math.PI * 2;

            const distance = 20 + Math.random() * 30;

            const sparkX = Math.cos(angle) * distance;

            const sparkY = Math.sin(angle) * distance;

            spark.style.setProperty('--spark-x', sparkX + 'px');

            spark.style.setProperty('--spark-y', sparkY + 'px');



            document.body.appendChild(spark);

            setTimeout(() => spark.remove(), 800);



            // Create smaller trail particles occasionally

            if (Math.random() > 0.7) {

                this.createTrailParticle(x, y);

            }

        }



        createTrailParticle(x, y) {

            const trail = document.createElement('div');

            trail.className = 'spark-trail';

            trail.style.left = (x + (Math.random() - 0.5) * 10) + 'px';

            trail.style.top = (y + (Math.random() - 0.5) * 10) + 'px';

            document.body.appendChild(trail);

            setTimeout(() => trail.remove(), 500);

        }



        createBurst(x, y, particleCount = 10) {

            for (let i = 0; i < particleCount; i++) {

                const particle = document.createElement('div');

                particle.className = 'spark-burst-particle';

                particle.style.left = x + 'px';

                particle.style.top = y + 'px';



                // Random direction for burst

                const angle = (Math.PI * 2 / particleCount) * i + (Math.random() - 0.5) * 0.5;

                const distance = 30 + Math.random() * 40;

                const burstX = Math.cos(angle) * distance;

                const burstY = Math.sin(angle) * distance;

                particle.style.setProperty('--burst-x', burstX + 'px');

                particle.style.setProperty('--burst-y', burstY + 'px');



                // Random delay for staggered effect

                particle.style.animationDelay = (Math.random() * 0.2) + 's';

                particle.style.background = Math.random() > 0.5 ? 'var(--primary)' : 'var(--secondary)';



                document.body.appendChild(particle);

                setTimeout(() => particle.remove(), 600);

            }

        }



        startTrail() {

            // Create occasional spark particles even when mouse is still

            setInterval(() => {

                if (this.lastMouseX && this.lastMouseY) {

                    if (Math.random() > 0.95) {

                        this.createTrailParticle(this.lastMouseX, this.lastMouseY);

                    }

                }

            }, 200);

        }

    }



    // Initialize spark animation system

    document.addEventListener('DOMContentLoaded', function() {

        new SparkAnimation();

    });



    // Homepage Navigation Functions

    function showTools() {

        document.getElementById('homepage').classList.add('hidden');

        document.getElementById('toolsSection').classList.add('active');

        // Scroll to top

        window.scrollTo({ top: 0, behavior: 'smooth' });

    }



    function showHome() {

        document.getElementById('homepage').classList.remove('hidden');

        document.getElementById('toolsSection').classList.remove('active');

        // Scroll to top

        window.scrollTo({ top: 0, behavior: 'smooth' });

    }



    // View Switcher Functions

    function switchView(view) {

        const classicView = document.getElementById('classicView');

        const modernView = document.getElementById('modernView');

        const classicBtn = document.getElementById('classicViewBtn');

        const modernBtn = document.getElementById('modernViewBtn');

        

        if (view === 'classic') {

            classicView.style.display = 'block';

            modernView.classList.remove('active');

            classicBtn.classList.add('active');

            modernBtn.classList.remove('active');

            // Sync domain input

            const modernDomain = document.getElementById('modernTargetDomain');

            const classicDomain = document.getElementById('targetDomain');

            if (modernDomain && classicDomain) {

                classicDomain.value = modernDomain.value;

            }

        } else if (view === 'modern') {

            classicView.style.display = 'none';

            modernView.classList.add('active');

            classicBtn.classList.remove('active');

            modernBtn.classList.add('active');

            // Sync domain input

            const modernDomain = document.getElementById('modernTargetDomain');

            const classicDomain = document.getElementById('targetDomain');

            if (modernDomain && classicDomain) {

                modernDomain.value = classicDomain.value;

            }

            // Initialize modern view if not already done

            if (!window.modernViewInitialized) {

                initializeModernView();

                window.modernViewInitialized = true;

            }

        }

    }



    // Modern View Functions

    function initializeModernView() {

        generateModernCategoryTabs();

        generateModernTools();

    }



    function generateModernCategoryTabs() {

        const tabsContainer = document.getElementById('modernCategoryTabs');

        if (!tabsContainer) return;

        tabsContainer.innerHTML = '';

        const categories = Object.keys(window.modernToolsData || {});

        

        categories.forEach((category, index) => {

            const tab = document.createElement('button');

            tab.className = `modern-tab ${index === 0 ? 'active' : ''}`;

            tab.textContent = category;

            tab.onclick = () => switchModernCategory(category, tab);

            tabsContainer.appendChild(tab);

        });

    }



    function switchModernCategory(category, activeTab) {

        document.querySelectorAll('.modern-tab').forEach(t => t.classList.remove('active'));

        activeTab.classList.add('active');

        generateModernTools(category);

    }



    function generateModernTools(category = null) {

        const container = document.getElementById('modernToolsContainer');

        if (!container) return;

        container.innerHTML = '';

        

        const categories = category ? [category] : Object.keys(window.modernToolsData || {});

        

        categories.forEach(cat => {

            const tools = window.modernToolsData[cat];

            const toolCard = createModernToolCard(cat, tools);

            container.appendChild(toolCard);

        });

    }



    function createModernToolCard(category, tools) {

        const card = document.createElement('div');

        card.className = 'modern-tool-card';

        

        card.innerHTML = `

            <div class="modern-tool-header">

                <div class="modern-tool-icon">

                    <i class="fas ${tools.icon}"></i>

                </div>

                <div class="modern-tool-title">

                    <h3>${category}</h3>

                    <p>${tools.tools.length} tools available</p>

                </div>

            </div>

            <div class="modern-tool-actions">

                ${tools.tools.map(tool => `

                    <button class="modern-tool-btn" onclick="executeModernTool('${category}', '${tool.name.replace(/'/g, "\\'")}')" title="${tool.note || ''}">

                        <span class="modern-tool-btn-name">${tool.name}</span>

                        <i class="fas fa-external-link-alt modern-tool-btn-icon"></i>

                    </button>

                `).join('')}

            </div>

        `;

        

        return card;

    }



    function executeModernTool(category, toolName) {

        const domain = document.getElementById('modernTargetDomain').value.trim();

        const tools = window.modernToolsData[category].tools;

        const tool = tools.find(t => t.name === toolName);

        

        if (!tool) return;

        

        const noDomainCategories = ['CVE Search', 'Mobile App Scanning'];

        

        if (!domain && !noDomainCategories.includes(category)) {

            alert('Please enter a target domain first!');

            document.getElementById('modernTargetDomain').focus();

            return;

        }

        

        let finalUrl = '';

        

        if (tool.url) {

            if (category === 'Mobile App Scanning' && !tool.url.includes('{domain}')) {

                finalUrl = tool.url;

            } else {

                finalUrl = tool.url.replace(/{domain}/g, domain || '').replace(/{cve}/g, domain || '');

            }

        } else if (tool.dork) {

            const dork = tool.dork.replace(/{domain}/g, domain);

            finalUrl = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;

        }

        

        if (finalUrl) {

            window.open(finalUrl, '_blank');

        }

    }



    function focusModernDomain() {

        document.getElementById('modernTargetDomain').focus();

    }



    function clearModernDomain() {

        document.getElementById('modernTargetDomain').value = '';

        document.getElementById('modernTargetDomain').focus();

    }



    // Modern Tools Data (from reconforge-pro.html)

    window.modernToolsData = {

        'Subdomain Enumeration': {

            icon: 'fa-sitemap',

            tools: [

                { name: 'crt.sh', url: 'https://crt.sh/?q=%.{domain}' },

                { name: 'SecurityTrails', url: 'https://securitytrails.com/list/apex_domain/{domain}' },

                { name: 'Shodan', url: 'https://www.shodan.io/search?query={domain}' },

                { name: 'Censys', url: 'https://search.censys.io/search?resource=hosts&q={domain}' },

                { name: 'DNSdumpster', url: 'https://dnsdumpster.com/?target={domain}' },

                { name: 'VirusTotal', url: 'https://www.virustotal.com/gui/domain/{domain}/relations' },

                { name: 'Google Wildcard', url: 'https://google.com/search?q=site:*.{domain}' },

                { name: 'Bing Domain', url: 'https://www.bing.com/search?q=domain:{domain}' },

                { name: 'Netcraft', url: 'https://sitereport.netcraft.com/?url={domain}' },

                { name: 'HackerTarget', url: 'https://hackertarget.com/subdomain-finder/?domain={domain}' },

                { name: 'viewdns.info', url: 'https://viewdns.info/reverseip/?host={domain}&t=1' },

                { name: 'Web Archive', url: 'https://web.archive.org/cdx/search/cdx?url=*.{domain}/*&collapse=urlkey&output=text&fl=original' }

            ]

        },

        'Secret Discovery': {

            icon: 'fa-key',

            tools: [

                { name: 'Web Archive Sensitive Files', url: 'https://web.archive.org/cdx/search/cdx?url=*.{domain}/*&collapse=urlkey&output=text&fl=original&filter=original:.*\\.(env|key|pem|config|secret)' },

                { name: 'GitHub Gists API Keys', url: 'https://gist.github.com/search?q={domain}+apikey&type=gists' },

                { name: 'Config Secrets', dork: 'site:{domain} (password OR secret OR credential OR token OR apikey) ext:env OR ext:yml OR ext:yaml' },

                { name: 'Development Secrets', dork: 'site:{domain} inurl:jenkins OR inurl:.git OR inurl:.env OR inurl:id_rsa' },

                { name: 'Authorization Tokens', dork: 'site:{domain} (authorization:Bearer OR authorization:Basic OR authorization:AWS) ext:log' },

                { name: '.ENV Files', url: 'https://web.archive.org/cdx/search/cdx?url=*.{domain}/*&collapse=urlkey&output=text&fl=original&filter=original:.*\\.env$' },

                { name: 'SSL Certificate CN', url: 'https://www.shodan.io/search?query=Ssl.cert.subject.CN:%22{domain}%22+200' },

                { name: 'JS Files', url: 'https://web.archive.org/cdx/search/cdx?url=*.{domain}/*&collapse=urlkey&output=text&fl=original&filter=original:.*\\.js$' }

            ]

        },

        'Passive Reconnaissance': {

            icon: 'fa-search',

            tools: [

                { name: 'WHOIS Lookup', url: 'https://whois.domaintools.com/{domain}' },

                { name: 'DNS Information', url: 'https://dnsdumpster.com/?q={domain}' },

                { name: 'SSL Certificate Info', url: 'https://www.ssllabs.com/ssltest/analyze.html?d={domain}' },

                { name: 'Reverse IP Lookup', url: 'https://viewdns.info/reverseip/?host={domain}&t=1' },

                { name: 'ASN Lookup', url: 'https://bgp.he.net/search?search%5Bsearch%5D={domain}&commit=Search' },

                { name: 'Robots.txt', url: 'https://{domain}/robots.txt' },

                { name: 'VirusTotal URLs', url: 'https://www.virustotal.com/gui/domain/{domain}/urls' }

            ]

        },

        'Technology Detection': {

            icon: 'fa-code',

            tools: [

                { name: 'BuiltWith', url: 'https://builtwith.com/{domain}' },

                { name: 'W3Techs', url: 'https://w3techs.com/sites/info/{domain}' },

                { name: 'WhatCMS', url: 'https://whatcms.org/?s={domain}' },

                { name: 'WebTechSurvey', url: 'https://webtechsurvey.com/website/{domain}' }

            ]

        },

        'Port Scanning': {

            icon: 'fa-network-wired',

            tools: [

                { name: 'viewdns.info', url: 'https://viewdns.info/portscan/?host={domain}' },

                { name: 'DNS Checker', url: 'https://dnschecker.org/port-scanner.php?query={domain}&ptype=server' },

                { name: 'Web Check', url: 'https://web-check.xyz/check/{domain}' }

            ]

        },

        'URL Collection': {

            icon: 'fa-link',

            tools: [

                { name: 'Web Archive', url: 'https://web.archive.org/cdx/search/cdx?url=*.{domain}/*&output=txt&collapse=urlkey&fl=original' },

                { name: 'urlscan.io', url: 'https://urlscan.io/api/v1/search/?q={domain}&size=10000' },

                { name: 'AlienVault OTX', url: 'https://otx.alienvault.com/api/v1/indicators/hostname/{domain}/url_list?limit=500&page=1' }

            ]

        },

        'GitHub Dorking': {

            icon: 'fa-github',

            tools: [

                { name: 'GitLab Search', dork: 'inurl:gitlab {domain}' },

                { name: '.git Exposure', dork: 'site:{domain}/.git/' },

                { name: 'API Keys', url: 'https://github.com/search?q=%27API_KEY%27+OR+%27api_key%27+{domain}&type=code' },

                { name: 'filename:.env', url: 'https://github.com/search?q=filename%3A.env+{domain}&type=code' },

                { name: 'Passwords/Secrets', url: 'https://github.com/search?q=%27password%27+OR+%27secret%27+{domain}&type=code' },

                { name: 'Tokens', url: 'https://github.com/search?q=%22token%22+OR+%22access_token%22+{domain}&type=code' },

                { name: 'Config Files', url: 'https://github.com/search?q=filename%3Aconfig+filename%3Asettings+{domain}&type=code' }

            ]

        },

        'CVE Search': {

            icon: 'fa-shield-alt',

            tools: [

                { name: 'MITRE CVE', url: 'https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword={cve}' },

                { name: 'Exploit-DB', url: 'https://www.exploit-db.com/search?cve={cve}' },

                { name: '0day.today', url: 'https://0day.today/search?search_request={cve}' },

                { name: 'CISA', url: 'https://www.cisa.gov/search?g={cve}' },

                { name: 'RedHat', url: 'https://access.redhat.com/security/security-updates/cve?q={cve}' },

                { name: 'PacketStorm', url: 'https://packetstormsecurity.com/search/?q={cve}' },

                { name: 'GitHub CVE', url: 'https://github.com/search?q=cve+{cve}&type=code' }

            ]

        },

        'Parameter Finder': {

            icon: 'fa-search',

            tools: [

                { name: 'SQLi Parameters (51)', dork: 'site:{domain} inurl:cat= | inurl:search= | inurl:action= | inurl:page= | inurl:id=' },

                { name: 'SQLi Parameters (68)', dork: 'site:{domain} inurl:doc= | inurl:code= | inurl:data= | inurl:view= | inurl:user=' },

                { name: 'Error SQLIs (71)', dork: 'site:{domain} intext:Syntax error | intext:Database Error | intext:MySQL | intext:ORA-' },

                { name: 'Open Redirects (41)', dork: 'site:{domain} inurl:redir= | inurl:url= | inurl:redirect= | inurl:return=' },

                { name: 'SSRF Params (24)', dork: 'site:{domain} inurl:redir | inurl:url= | inurl:redirect= | inurl:dest=' },

                { name: 'RCE Params (23)', dork: 'site:{domain} inurl:cmd= | inurl:exec= | inurl:command= | inurl:execute=' },

                { name: 'XSS Params (27)', dork: 'site:{domain} inurl:q= | inurl:s= | inurl:search= | inurl:query=' },

                { name: 'LFI Params (24)', dork: 'site:{domain} inurl:cat= | inurl:dir= | inurl:file= | inurl:path=' }

            ]

        },

        'Information Disclosure': {

            icon: 'fa-file-alt',

            tools: [

                { name: 'Directory Listing', dork: 'site:{domain} intitle:index.of' },

                { name: 'Exposed FTP', dork: 'site:{domain} inurl:ftp intitle:index of' },

                { name: 'PDF Files', dork: 'site:{domain} filetype:pdf' },

                { name: 'Config Files', dork: 'site:{domain} ext:xml | ext:conf | ext:cnf | ext:ini' },

                { name: 'Exposed Databases', dork: 'site:{domain} ext:sql | ext:dbf | ext:mdb' },

                { name: 'Backup Files', dork: 'site:{domain} ext:bkf | ext:bkp | ext:bak | ext:old' },

                { name: 'Log Files', dork: 'site:{domain} ext:log' },

                { name: 'Find Emails', dork: 'site:{domain} inurl:email | inurl:emails ext:txt | ext:xlsx' },

                { name: 'Find Passwords', dork: 'site:{domain} intext:admin.password' },

                { name: 'Cloud Credentials', dork: 'site:{domain} (aws_access_key_id OR aws_secret_access_key) filetype:json' },

                { name: 'S3 Buckets', dork: 'site:.s3.amazonaws.com {domain}' },

                { name: 'Login/Admin Pages', dork: 'site:{domain} inurl:login | inurl:admin | inurl:portal' }

            ]

        },

        'Mobile App Scanning': {

            icon: 'fa-mobile-alt',

            tools: [

                { name: 'MobSF (Mobile Security Framework)', url: 'https://mobsf.live/', note: 'Open-source SAST/DAST for Android/iOS apps' },

                { name: 'VirusTotal File Upload', url: 'https://www.virustotal.com/gui/home/upload', note: 'Upload APK/IPA for malware analysis' },

                { name: 'BeVigil Security Search', url: 'https://bevigil.com/search?query={domain}', note: 'Security search engine for mobile apps' },

                { name: 'ImmuniWeb Mobile Test', url: 'https://www.immuniweb.com/mobile/', note: 'OWASP Mobile Top 10 security checks' },

                { name: 'Quixxi Vulnerability Scanner', url: 'https://www.quixxi.com/vulnerability-test/', note: 'Android & iOS vulnerability scanner' },

                { name: 'AppSweep', url: 'https://appsweep.guardsquare.com/', note: 'Free APK/AAB/AAR security scanner' },

                { name: 'Appknox', url: 'https://www.appknox.com/', note: 'Enterprise mobile app security testing' },

                { name: 'OWASP ZAP', url: 'https://www.zaproxy.org/', note: 'Web/API security testing' }

            ]

        }

    };



    // Sync domain inputs when switching views

    function syncDomainInputs() {

        const classicDomain = document.getElementById('targetDomain');

        const modernDomain = document.getElementById('modernTargetDomain');

        

        if (classicDomain && modernDomain) {

            classicDomain.addEventListener('input', function() {

                modernDomain.value = this.value;

            });

            

            modernDomain.addEventListener('input', function() {

                classicDomain.value = this.value;

            });

        }

    }



    // Initialize domain sync on page load

    document.addEventListener('DOMContentLoaded', function() {

        syncDomainInputs();

    });

