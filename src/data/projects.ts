import { Project } from '../types';

export const projects: Project[] = [
  {
    "id": "linux-automated-backup",
    "title": "Automated Backup System",
    "subtitle": "Scheduled Incremental & Full Backup Automation Engine for Linux",
    "description": "A robust, automated Linux backup utility supporting full and incremental backups with compression, rotative retention policies, checksum validation, and alerting.",
    "category": "Systems & Linux",
    "technologies": [
      "Bash",
      "Linux CLI",
      "cron",
      "tar",
      "gzip",
      "rsync",
      "SHA-256"
    ],
    "keyFeatures": [
      "Automated incremental and differential backups saving disk bandwidth",
      "Configurable retention cycles with automated archival pruning",
      "Integrity verification using SHA-256 checksum tracking",
      "Detailed execution logs with timestamps and failure alert hooks"
    ],
    "image": "/projects/backup-dashboard.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "linux-sysinfo-tool",
    "title": "Linux System Information Tool",
    "subtitle": "High-Performance Bash Diagnostic & Hardware Profiler",
    "description": "A professional, modular hardware discovery and diagnostic utility for Linux environments. Extracts granular CPU, RAM, disk, network, and OS metrics directly from /proc, /sys, and kernel interfaces.",
    "category": "Systems & Linux",
    "technologies": [
      "Bash",
      "Linux Kernel APIs",
      "/proc FS",
      "lshw",
      "iproute2"
    ],
    "keyFeatures": [
      "Direct kernel and virtual filesystem inspection bypassing heavy dependencies",
      "Granular CPU thermal, governor, and per-core frequency metrics",
      "Block device topology with mount table and IO utilization stats",
      "Network interface speed, duplex, RX/TX errors, and gateway verification"
    ],
    "image": "/projects/linux-sysinfo-tool.png",
    "githubUrl": "https://github.com/XREFS0/Linux-System-Information-Tool"
  },
  {
    "id": "linux-screenshot-tool",
    "title": "Linux CLI ScreenShot Utility",
    "subtitle": "Lightweight Terminal-Driven Screen Capture & Region Utility",
    "description": "A streamlined command-line and automated screenshot capturing tool designed for headless and desktop Linux environments with instant PNG compression and upload hooks.",
    "category": "Systems & Linux",
    "technologies": [
      "Bash",
      "X11 / Wayland",
      "scrot",
      "ImageMagick",
      "Linux Shell"
    ],
    "keyFeatures": [
      "Instant full screen, active window, and interactive rectangle capture",
      "Automatic timestamped naming conventions and customizable save targets",
      "Silent CLI daemon triggers suitable for automated visual testing and monitoring",
      "Built-in optimization and lossless PNG compression pipeline"
    ],
    "image": "/projects/screenshot-tool.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "linux-server-monitor",
    "title": "Server Monitoring Tool",
    "subtitle": "Lightweight Bash-Based Real-Time Server Telemetry Daemon",
    "description": "A lightweight, zero-dependency server monitoring utility for Linux servers. Streams CPU, memory, active TCP connections, disk consumption, and daemon uptime in real-time.",
    "category": "Systems & Linux",
    "technologies": [
      "Bash",
      "Linux Shell",
      "Cron",
      "Systemd",
      "procfs",
      "awk / sed"
    ],
    "keyFeatures": [
      "Real-time resource alerting when load or memory breaches safety thresholds",
      "Zero external runtime dependencies — runs on barebone VPS / container setups",
      "Live TCP/UDP connection and listener audits",
      "Colorized terminal HUD and automated periodic diagnostic log generation"
    ],
    "image": "/projects/linux-server-monitor.jpg",
    "githubUrl": "https://github.com/XREFS0/Server-Monitoring-Tool"
  },
  {
    "id": "xrefs0-recon",
    "title": "XREFS0 Recon Engine",
    "subtitle": "Unified 38+ Module Domain Reconnaissance & Attack Surface Engine",
    "description": "A modular cyber reconnaissance engine orchestrating 38+ active and passive intelligence gathering modules. Designed for penetration testers and security analysts to construct a comprehensive attack surface map with a single command.",
    "category": "Cybersecurity & Recon",
    "technologies": [
      "Python 3.8+",
      "ThreadPoolExecutor",
      "Scapy",
      "SOCKS5 Proxy",
      "D3.js Graph",
      "Playwright",
      "NVD CVE API"
    ],
    "keyFeatures": [
      "6 parallel execution phases reducing scan time by 60%+ using non-blocking ThreadPoolExecutor",
      "CDN/Proxy bypass engine implementing 7 distinct origin-IP discovery techniques",
      "Technology fingerprinting across 40+ web frameworks and 50+ CMS platforms",
      "Automated NVD CVE mapping matching detected technology versions against known vulnerability databases",
      "Subdomain takeover checks covering 30+ major cloud providers (AWS S3, Azure, GCP)",
      "Interactive force-directed D3.js network topology graph generation",
      "Comprehensive report generation across HTML (dark theme), JSON, YAML, CSV, XLSX, and PDF"
    ],
    "architecture": "Modular pipeline divided into 6 discrete execution phases: Phase A (Passive OSINT & WHOIS), Phase B (DNS & Origin IP), Phase C (Port probing & SSL/TLS analysis), Phase D (Application layer & WAF detection), Phase E (Deep web spidering, JS mining & CVE correlation), and Phase F (Screenshots & D3.js visualization).",
    "image": "/projects/xrefs0-recon.png",
    "githubUrl": "https://github.com/XREFS0/xrefs0",
    "featured": true
  },
  {
    "id": "netsentinel-scanner",
    "title": "NetSentinel — Network Scanner",
    "subtitle": "Multi-Threaded Network Discovery & Security Auditing Desktop Application",
    "description": "A high-performance desktop network discovery and vulnerability assessment suite built with PySide6, Scapy, and raw sockets. Combines active packet crafting with high-concurrency socket polling.",
    "category": "Networking",
    "technologies": [
      "Python 3.12+",
      "PySide6 (Qt)",
      "Scapy",
      "Raw Sockets",
      "SQLite",
      "IEEE OUI DB"
    ],
    "keyFeatures": [
      "Dual discovery pipeline combining Scapy ARP broadcasting with concurrent TCP socket connect probes",
      "IEEE OUI hardware manufacturer resolution embedded database",
      "High-concurrency TCP port scanner with service banner grabbing (HTTP, SSH, FTP, SMTP, MySQL)",
      "Passive OS fingerprinting utilizing TCP/IP initial TTL heuristics and banner analysis",
      "Persistent scan history stored in local SQLite database with filterable logs console",
      "Export capabilities for RFC-4180 CSV, JSON, and formatted plain-text security reports"
    ],
    "architecture": "Multi-tiered Qt desktop application with background QThread workers executing asynchronous event loops for packet capture and socket polling, ensuring zero UI thread starvation.",
    "image": "/projects/netsentinel-dashboard.png",
    "additionalImages": [
      "/projects/netsentinel-discovery.png",
      "/projects/netsentinel-ports.png"
    ],
    "githubUrl": "https://github.com/XREFS0/Network-Scanner",
    "featured": true
  },
  {
    "id": "port-scanner-pro",
    "title": "Professional Network Port Scanner",
    "subtitle": "Multi-Threaded TCP Port Scanner & Service Banner Identification Tool",
    "description": "A multi-threaded desktop TCP port scanner with configurable thread pools, intelligent timeout calculation, and banner grabbing capabilities across common network services.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "Sockets",
      "ThreadPoolExecutor",
      "ReportLab"
    ],
    "keyFeatures": [
      "High-throughput concurrent TCP connect probes with thread pool scaling up to 100 workers",
      "Adaptive socket timeout calculation based on preliminary round-trip latency measurements",
      "Active service banner identification across HTTP, SSH, FTP, Telnet, SMTP, and MySQL",
      "Preset scan profiles: Common (Top 20), Fast (Top 100), Extended (Top 1024), and Full (1-65535)",
      "Real-time scan cancellation, thread-safe progress reporting, and PDF/CSV reporting"
    ],
    "image": "/projects/port-scanner.png",
    "githubUrl": "https://github.com/XREFS0/Port-Scanner"
  },
  {
    "id": "network-traffic-monitor",
    "title": "Network Traffic Monitor",
    "subtitle": "Real-Time Promiscuous Packet Inspection & Protocol Telemetry Suite",
    "description": "A packet capture and protocol distribution analysis platform built with Python, PySide6, and Scapy. Captures live interfaces, performs deep packet parsing, and visualizes bandwidth utilization in real time.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "Scapy",
      "Raw Sockets",
      "Matplotlib"
    ],
    "keyFeatures": [
      "Live promiscuous packet capture across Ethernet, Wi-Fi, and virtual network adapters",
      "Deep packet inspection across Layer 2 through Layer 7 (Ethernet, IPv4/IPv6, TCP, UDP, ICMP, DNS, HTTP)",
      "Dynamic rolling bandwidth graphs showing incoming/outgoing kilobits-per-second and packet rates",
      "Protocol distribution pie charts and real-time top-talker IP ranking tables",
      "BPF filter compiler allowing granular packet filtering prior to UI ingestion"
    ],
    "image": "/projects/network-traffic-dashboard.png",
    "additionalImages": [
      "/projects/network-traffic-packets.png"
    ],
    "githubUrl": "https://github.com/XREFS0/Network-Traffic-Monitor"
  },
  {
    "id": "netmonitor-dashboard",
    "title": "Network Monitoring Dashboard",
    "subtitle": "Cross-Platform Real-Time Network & Adapter Diagnostics System",
    "description": "A cross-platform network telemetry utility designed for system administrators. Monitors active network adapters, tracks live socket connection states, and logs routing tables with automated bandwidth threshold alerts.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "psutil",
      "Matplotlib",
      "JSON/CSV Exporters"
    ],
    "keyFeatures": [
      "Live network interface metrics: packet counts, error rates, drop rates, and throughput counters",
      "Real-time socket connection explorer displaying ESTABLISHED, LISTEN, and TIME_WAIT states with PID correlation",
      "Interactive historical bandwidth graphs using embedded Matplotlib canvases",
      "Automated threshold alert system notifying on packet loss, interface disconnections, and spikes"
    ],
    "image": "/projects/netmonitor-dashboard.png",
    "additionalImages": [
      "/projects/netmonitor-connections.png",
      "/projects/netmonitor-interfaces.png"
    ],
    "githubUrl": "https://github.com/XREFS0/Network-Monitoring-Dashboard"
  },
  {
    "id": "connection-diagnostics-tool",
    "title": "Connection Diagnostics Tool",
    "subtitle": "Multi-Protocol End-to-End Connectivity & Route Diagnostic Suite",
    "description": "A desktop diagnostic tool built with PySide6 to evaluate end-to-end network connectivity, TCP handshake latency, ICMP routing hops, and MTU discovery.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "Scapy",
      "Traceroute",
      "Raw Sockets"
    ],
    "keyFeatures": [
      "Multi-hop visual route tracer with per-hop packet latency and loss statistics",
      "Concurrent TCP SYN handshake checks against arbitrary target endpoints",
      "Path MTU discovery and packet fragmentation analysis",
      "Detailed diagnostics session log exports with timestamped JSON/CSV output"
    ],
    "image": "/projects/connection-diagnostics.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "dns-lookup-tool",
    "title": "DNS Lookup Tool",
    "subtitle": "Production-Grade DNS Resolver & Record Inspection Utility",
    "description": "A desktop DNS utility engineered for developers and network administrators to query all DNS record types, measure nameserver response times, and verify DNSSEC signatures.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "dnspython",
      "AsyncIO",
      "DNSSEC Validator"
    ],
    "keyFeatures": [
      "Complete DNS record resolution: A, AAAA, CNAME, MX, TXT, NS, SOA, PTR, and SRV",
      "Custom nameserver benchmarking (Cloudflare, Google, Quad9, Custom OpenNIC)",
      "Recursive DNS traversal tracer showing resolution root-to-authoritative steps",
      "DNS propagation and TTL breakdown with clipboard quick-copy"
    ],
    "image": "/projects/dns-lookup-tool.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "ip-address-calculator",
    "title": "IP Address Calculator",
    "subtitle": "IPv4 & IPv6 Subnet Calculator & Network Planning Utility",
    "description": "A subnetting engine providing precise network partitioning, VLSM calculation, IPv6 prefix generation, and binary subnet visualizer.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "ipaddress Module",
      "Subnet Division Algorithm"
    ],
    "keyFeatures": [
      "Dual IPv4 & IPv6 subnet calculation with CIDR prefix manipulation",
      "Variable Length Subnet Masking (VLSM) hierarchical partition planner",
      "Binary bitmask visualization breaking down network, subnet, and host octets",
      "Usable host IP range calculation, broadcast address, and wildcard masks"
    ],
    "image": "/projects/ip-calculator.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "local-network-inventory-manager",
    "title": "Local Network Inventory Manager",
    "subtitle": "Automated LAN Asset Discovery & Device Topology Auditor",
    "description": "An asset management desktop application for continuously scanning local subnets, cataloging device MAC/IP pairings, identifying vendors, and alerting on rogue devices.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "SQLite",
      "ARP Polling",
      "OUI Database"
    ],
    "keyFeatures": [
      "Continuous background ARP & ping sweep polling to detect new network hardware",
      "Hardware manufacturer identification via embedded IEEE OUI registry lookup",
      "Rogue device detection with notification alerts on unknown MAC addresses",
      "Historical connectivity logs, uptime tracking, and complete inventory exports"
    ],
    "image": "/projects/network-inventory-manager.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "network-device-discovery-tool",
    "title": "Network Device Discovery Tool",
    "subtitle": "High-Performance Asynchronous Subnet Device Scanner",
    "description": "A dedicated, lightweight device discovery tool built with Python and Qt. Scans CIDR blocks at rapid speeds to detect active hosts, open management ports, and hostnames.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "Raw Sockets",
      "NetBIOS Resolver",
      "mDNS"
    ],
    "keyFeatures": [
      "High-speed asynchronous subnet sweep covering /24 ranges in under 3 seconds",
      "Multi-protocol hostname discovery utilizing NetBIOS, mDNS, and reverse DNS",
      "Live device count badges and responsive device cards with one-click ping",
      "Filterable device table with instant search and CSV export"
    ],
    "image": "/projects/network-device-discovery.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "ping-latency-monitor",
    "title": "Ping & Latency Monitor",
    "subtitle": "Real-Time Multi-Host ICMP Telemetry & Jitter Analysis Utility",
    "description": "A real-time network latency monitor tracking multiple targets simultaneously with live graphs, jitter calculations, packet loss statistics, and downtime logging.",
    "category": "Networking",
    "technologies": [
      "Python 3.10+",
      "PySide6 (Qt)",
      "ICMP Sockets",
      "Matplotlib",
      "CSV Exporter"
    ],
    "keyFeatures": [
      "Concurrent multi-target ping monitors running independent polling schedules",
      "Real-time rolling latency graphs highlighting jitter, spikes, and packet loss",
      "Configurable downtime and timeout alerts with desktop notifications",
      "Session summary reports detailing min/avg/max latency and standard deviation"
    ],
    "image": "/projects/ping-latency-monitor.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "masa-system-monitor",
    "title": "MASA System Monitor",
    "subtitle": "Real-Time Hardware Telemetry & Desktop Diagnostic Utility",
    "description": "A modern hardware telemetry and desktop diagnostic utility built with C#, .NET 8, WPF, and MVVM architecture. Captures per-core hardware metrics, live process memory, and system diagnostics with zero UI freezing.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "CommunityToolkit.Mvvm",
      "LiveCharts2",
      "LibreHardwareMonitor",
      "SQLite",
      "Serilog"
    ],
    "keyFeatures": [
      "Real-time asynchronous telemetry engine with configurable polling intervals (500ms to 2000ms)",
      "Deep hardware sensor ingestion: CPU per-core load, clock, temperature, TDP, and GPU utilization / VRAM",
      "Smooth LiveCharts2 gradient area graphs displaying rolling throughput and latency histories",
      "Real-time process explorer with CPU/RAM ranking, thread inspection, and process management",
      "Configurable hardware alert thresholds with automated Windows toast notifications",
      "Integrated SQLite historical logger recording system benchmark sessions"
    ],
    "architecture": "Clean MVVM layered architecture with decoupled Service, ViewModel, and View layers communicating through CommunityToolkit.Mvvm WeakReferenceMessenger.",
    "image": "/projects/system-monitor-dashboard.png",
    "additionalImages": [
      "/projects/system-monitor-cpu.png",
      "/projects/system-monitor-gpu.png",
      "/projects/system-monitor-network.png"
    ],
    "githubUrl": "https://github.com/XREFS0/MASA-System-Monitor",
    "featured": true
  },
  {
    "id": "clipboard-manager-pro",
    "title": "MASA Clipboard Manager",
    "subtitle": "Privacy-Focused Windows Clipboard History & Developer Utility",
    "description": "A privacy-focused Windows clipboard manager engineered with C#, .NET 8, and WPF. Intercepts clipboard events, encrypts sensitive records with Windows DPAPI, and offers hotkey quick-paste overlays.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "Windows API",
      "DPAPI Encryption",
      "SQLite",
      "CommunityToolkit.Mvvm"
    ],
    "keyFeatures": [
      "Low-level Win32 clipboard sequence listener (AddClipboardFormatListener)",
      "Multi-format support handling plain text, rich RTF, HTML fragments, and bitmap images",
      "Zero-latency floating quick-paste overlay triggered by configurable global hotkeys",
      "Developer utilities: JSON formatter, Base64 encoder/decoder, Hash generation, and regex extractor",
      "Hardware-backed AES/DPAPI encryption for sensitive clipboard records"
    ],
    "image": "/projects/clipboard-manager.png",
    "githubUrl": "https://github.com/XREFS0/Clipboard-Manager"
  },
  {
    "id": "masa-screenshot-app",
    "title": "MASA Screenshot & Annotator",
    "subtitle": "High-Performance Windows Screen Capture & Image Redaction Tool",
    "description": "A native desktop screen capture, annotation, and redaction tool built with C# and WPF. Features full multi-monitor DPI awareness, pixelation tools, and instant clipboard syncing.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "Win32 GDI+",
      "DirectX / DwmCapture",
      "MVVM"
    ],
    "keyFeatures": [
      "Multi-monitor high-DPI capture with pixel-perfect region cropping and window snapping",
      "Built-in annotation canvas with arrows, callout numbers, rectangles, and text labels",
      "Instant pixelation and blur redaction brushes to protect sensitive credentials and data",
      "One-click export to clipboard, local PNG, or automated web storage"
    ],
    "image": "/projects/masa-screenshot-app.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "advanced-calculator-pro",
    "title": "Advanced Calculator Pro",
    "subtitle": "Multi-Mode Scientific, Programmer & Precision Mathematics Suite",
    "description": "A desktop calculation and mathematical expression evaluator built with C# 12 and WPF. Supports arbitrary precision big integers, scientific trigonometry, and programmer bitwise operations.",
    "category": "C# & .NET",
    "technologies": [
      "C# 12",
      ".NET 8",
      "WPF",
      "Shunting-Yard Parser",
      "BigInteger",
      "MVVM"
    ],
    "keyFeatures": [
      "Four distinct calculation modes: Standard, Scientific, Programmer (HEX/DEC/OCT/BIN), and Unit Converter",
      "Custom Shunting-Yard AST mathematical expression parser supporting complex expressions",
      "Bitwise logic operations (AND, OR, XOR, NOT, Bit-shifts) with 64-bit register visualizer",
      "Persistent calculation tape and history tracking with instant replay"
    ],
    "image": "/projects/advanced-calculator.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "unit-converter-pro",
    "title": "Advanced Unit Converter",
    "subtitle": "Multi-Domain Engineering & Metric Conversion Desktop Application",
    "description": "A modern WPF unit conversion tool covering 15+ measurement dimensions, real-time bidirectional calculation, currency conversions, and dark/light UI modes.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "MVVM",
      "Live Currency APIs",
      "XAML Styling"
    ],
    "keyFeatures": [
      "15+ conversion domains: Length, Weight, Temperature, Pressure, Energy, Speed, and Data storage",
      "Dynamic bidirectional updates with high floating-point precision",
      "Favorite conversions quick-bar and offline conversion factor caching",
      "Clean modern dark/light theme switching with smooth transitions"
    ],
    "image": "/projects/unit-converter-pro.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "password-generator-pro",
    "title": "MASA Password Generator",
    "subtitle": "Cryptographically Secure Password & Passphrase Generator",
    "description": "A cryptographic desktop application built with C# and .NET 8 using RNGCryptoServiceProvider. Generates high-entropy passwords, Diceware passphrases, and audits password strength.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "System.Security.Cryptography",
      "zxcvbn Strength Estimator"
    ],
    "keyFeatures": [
      "Cryptographically secure pseudo-random number generator (CSPRNG) entropy source",
      "Custom character sets, excluded ambigous characters, and phonetic readability rules",
      "Diceware multi-word passphrase generation with EFF wordlists",
      "Real-time zxcvbn entropy calculation, crack-time estimation, and bulk password batch generation"
    ],
    "image": "/projects/password-generator-pro.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "masa-google-maps-extractor",
    "title": "MASA Google Maps & Bing B2B Extractor",
    "subtitle": "Multi-Threaded Geospatial Lead Generation Desktop Suite",
    "description": "A high-throughput business data extraction platform built with C# and Selenium WebDriver. Extracts localized B2B leads including business names, addresses, phones, websites, ratings, and social media.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "Selenium WebDriver",
      "Chromium",
      "EPPlus (Excel)",
      "CsvHelper"
    ],
    "keyFeatures": [
      "Concurrent headless browser workers scraping multi-region localized business listings",
      "Automatic pagination handling, infinite scroll orchestration, and anti-bot mitigation",
      "Deep business profile extraction: Phone, Address, Reviews, Opening Hours, Website, and Social Links",
      "Direct export pipeline generating formatted Microsoft Excel (.xlsx) and CSV datasets"
    ],
    "image": "/projects/google-maps-extractor.jpg",
    "githubUrl": "https://github.com/XREFS0/MASA-Google-Maps-B2B-Leads-Extractor"
  },
  {
    "id": "masa-ads-extractor",
    "title": "MASA Ads Extractor",
    "subtitle": "Competitive Advertising Intelligence & Creative Harvesting Engine",
    "description": "A desktop intelligence extraction platform designed to scrape, aggregate, and analyze competitive advertising campaigns, ad copy, media assets, and active dates across major ad libraries.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "Selenium WebDriver",
      "AngleSharp",
      "Newtonsoft.Json"
    ],
    "keyFeatures": [
      "Automated extraction of creative assets, landing page URLs, CTA buttons, and ad text",
      "Keyword-driven query builder with multi-country and language filtering options",
      "Built-in media downloader archiving video and high-resolution banner ad files",
      "Detailed analytical reports with impression estimates and running duration metrics"
    ],
    "image": "/projects/ads-extractor.jpg",
    "githubUrl": "https://github.com/XREFS0/MASA-Ads-Extractor"
  },
  {
    "id": "masa-instapilot",
    "title": "MASA InstaPilot",
    "subtitle": "Instagram Automation, Lead Prospecting & Analytics Desktop Engine",
    "description": "An advanced desktop automation and lead generation suite for Instagram built with C# and Selenium. Automates profile discovery, hashtag lead extraction, and engagement management.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "Selenium WebDriver",
      "ChromeDriver",
      "SQLite"
    ],
    "keyFeatures": [
      "Targeted audience scraper filtering by niche hashtags, follower counts, and bio keywords",
      "Automated follower, direct message, and engagement scheduling with humanized mouse delays",
      "Proxy rotation manager supporting HTTP/SOCKS5 proxies with automated health checks",
      "Safety cooldown timers and action limits safeguarding accounts against automated bans"
    ],
    "image": "/projects/instapilot.jpg",
    "githubUrl": "https://github.com/XREFS0/MASA-InstaPilot"
  },
  {
    "id": "masa-contact-extractor",
    "title": "MASA Contact Extractor",
    "subtitle": "High-Concurrency Web Email & Phone Scraper Desktop Application",
    "description": "A multi-threaded Windows desktop tool for harvesting verified email addresses and telephone numbers across targeted search results and deep website crawling.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WinForms / WPF",
      "Regex Engine",
      "HtmlAgilityPack",
      "EPPlus"
    ],
    "keyFeatures": [
      "High-speed multi-threaded HTML parsing with custom regular expressions for emails and international phones",
      "Deep domain spidering traversing Contact, About, and Team pages automatically",
      "Syntax validation and MX record DNS pinging to remove inactive and junk addresses",
      "One-click export to CSV, TXT, and Excel with deduplication algorithms"
    ],
    "image": "/projects/contact-extractor-v2.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "masa-b2b-leads-extractor",
    "title": "MASA B2B Leads Extractor Pro",
    "subtitle": "Enterprise Multi-Directory Lead Extraction & Enrichment Suite",
    "description": "An enterprise desktop scraping suite aggregating business directories, corporate registries, and industry portals to build enriched B2B contact lists.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "Chromium Engine",
      "CsvHelper",
      "Multi-Threading"
    ],
    "keyFeatures": [
      "Multi-source directory harvesting across global B2B trade platforms and registers",
      "Smart data enrichment correlating company domain, executive contacts, and phone lines",
      "Integrated proxy rotators and fingerprint randomizers ensuring zero IP blacklisting",
      "Batch export wizard with customizable column mapping for CRM imports"
    ],
    "image": "/projects/b2b-leads-extractor.jpg",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "masa-yellow-leads-extractor",
    "title": "MASA Yellow Leads Extractor",
    "subtitle": "YellowPages Commercial Directory Scraper & Data Miner",
    "description": "A specialized scraping utility designed to extract comprehensive business profiles, addresses, verified phone numbers, and categories from YellowPages across multiple regions.",
    "category": "C# & .NET",
    "technologies": [
      "C#",
      ".NET 8",
      "WPF",
      "HtmlAgilityPack",
      "HTTP Client Factory",
      "Excel Exporter"
    ],
    "keyFeatures": [
      "Automated regional and postal code traversal across national YellowPages portals",
      "Extraction of company name, street address, postal code, phone, website, and opening hours",
      "Duplicate detection and clean data formatting ready for cold-outreach workflows",
      "Progressive saving ensuring zero data loss during long-running extraction sessions"
    ],
    "image": "/projects/yellow-leads-extractor.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "masa-accounting-system",
    "title": "MASA Accounting Management System",
    "subtitle": "Audit-Compliant Double-Entry Accounting & Financial Suite",
    "description": "An enterprise desktop double-entry accounting application built with VB.NET and SQLite. Features a dynamic Chart of Accounts, balanced General Journal, automated Balance Sheets, and Profit & Loss generation.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "Double-Entry Core",
      "ReportEngine"
    ],
    "keyFeatures": [
      "Strict double-entry bookkeeping engine with enforced debit/credit balance verification",
      "Hierarchical Chart of Accounts supporting Assets, Liabilities, Equity, Revenue, and Expenses",
      "Real-time financial statement generation: Balance Sheet, Income Statement (P&L), and Trial Balance",
      "Multi-currency transaction support with currency conversion tracking and exchange rate logs",
      "Immutable audit trail recording every journal voucher posting, edit, and void event"
    ],
    "architecture": "Layered desktop architecture with dedicated Data Access, Business Logic, and UI presentation layers ensuring data integrity across ACID-compliant transactions.",
    "image": "/projects/accounting-dashboard.jpg",
    "additionalImages": [
      "/projects/accounting-journal.jpg",
      "/projects/accounting-accounts.jpg"
    ],
    "githubUrl": "https://github.com/XREFS0/Accounting-Management-System"
  },
  {
    "id": "masa-inventory-system",
    "title": "MASA Inventory Management System",
    "subtitle": "Multi-Warehouse Inventory Control & Supply Chain Suite",
    "description": "A commercial-grade desktop inventory control and supply chain system built with VB.NET and SQLite. Tracks stock across multiple warehouses, generates Purchase/Sales Orders, and alerts on low thresholds.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "Barcode Engine",
      "PrintEngine"
    ],
    "keyFeatures": [
      "Multi-warehouse inventory partitioning with real-time transfer tracking between facilities",
      "Automated purchase order workflows triggered when stock drops below safety reorder thresholds",
      "Barcode generation and instant scanner input parsing for rapid inbound/outbound fulfillment",
      "Stock valuation calculations using FIFO, LIFO, and Weighted Average Cost methodologies",
      "Complete audit trail logging every stock adjustment, transfer, and physical count reconciliation"
    ],
    "image": "/projects/inventory-dashboard.png",
    "githubUrl": "https://github.com/XREFS0/Inventory-Management-System"
  },
  {
    "id": "masa-crm-system",
    "title": "Customer Relationship Manager (Enterprise CRM)",
    "subtitle": "Modular Windows Desktop CRM & Sales Pipeline Management Suite",
    "description": "A modular desktop CRM system built with VB.NET and SQLite for small-to-medium businesses. Manages customer lifecycles, pipelines, task assignments, interaction histories, and sales forecasts.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "Sales Funnel Engine",
      "CryptoAuth"
    ],
    "keyFeatures": [
      "Visual sales opportunity pipeline with custom stage milestones (Lead, Qualified, Proposal, Won/Lost)",
      "Customer 360-degree profile view aggregating emails, phone calls, meetings, and purchased deals",
      "Role-based access control (Admin, Sales Rep, Support) with salted password hashing",
      "Automated follow-up reminders and scheduled task escalations with visual overdue warnings"
    ],
    "image": "/projects/crm-dashboard.png",
    "githubUrl": "https://github.com/XREFS0/Customer-Relationship-Manager"
  },
  {
    "id": "masa-desktop-backup",
    "title": "Desktop Backup Tool (Enterprise Edition)",
    "subtitle": "Multi-Threaded Scheduled File & Database Archival Solution",
    "description": "A desktop backup and disaster recovery utility built with VB.NET and .NET 8. Executes scheduled full, incremental, and differential backups with AES-256 encryption and ZIP64 compression.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "AES-256 Encryption",
      "ZIP64",
      "VSS Snapshots"
    ],
    "keyFeatures": [
      "Three operational modes: Full, Incremental (archive-bit / timestamp check), and Differential",
      "Hardware-accelerated AES-256 archive encryption safeguarding sensitive enterprise documents",
      "ZIP64 compression handling multi-gigabyte files and directories without size limitations",
      "Integrated Windows Task Scheduler bridge for unattended overnight automated backups"
    ],
    "image": "/projects/backup-dashboard.png",
    "githubUrl": "https://github.com/XREFS0/Desktop-Backup-Tool"
  },
  {
    "id": "attendance-management-system",
    "title": "Attendance Management System",
    "subtitle": "Enterprise Employee Time-Tracking, Shifts & Leave Portal",
    "description": "A comprehensive desktop attendance and workforce management system built with VB.NET and SQLite. Handles biometric terminal logs, shifts, overtime calculations, and leave management.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "Time Calculation Engine",
      "Report Engine"
    ],
    "keyFeatures": [
      "Multi-shift scheduling supporting flexible, split, and rotational night-shift patterns",
      "Automated clock-in/out reconciliation with grace period, late penalty, and overtime rules",
      "Leave management lifecycle: annual, sick, and emergency leave requests with manager approval",
      "Detailed monthly attendance timesheets and payroll-ready export to Excel/PDF"
    ],
    "image": "/projects/attendance-management.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "expense-management-system",
    "title": "Expense Management System",
    "subtitle": "Desktop Corporate Expense Tracking, Budgets & Reimbursements",
    "description": "A desktop financial application engineered with VB.NET and SQLite to track corporate expenditures, department budget ceilings, multi-category receipts, and petty cash logs.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "Chart Engine",
      "PDF Exporter"
    ],
    "keyFeatures": [
      "Granular expenditure categorization with custom tax deductible tracking",
      "Department budget limits with visual percentage alerts when approaching ceilings",
      "Receipt attachment vault storing scanned expense vouchers and invoice images",
      "Comprehensive monthly spending breakdowns and interactive expense trend charts"
    ],
    "image": "/projects/expense-management.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "invoice-billing-management-system",
    "title": "Invoice & Billing Management System",
    "subtitle": "Automated Invoicing, Tax Computation & Client Receivables Suite",
    "description": "A commercial desktop invoicing and billing platform developed with VB.NET and SQLite. Features itemized invoice generation, multi-tier tax handling, payment records, and overdue tracking.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "Thermal/A4 PrintEngine",
      "PDF Generator"
    ],
    "keyFeatures": [
      "Professional A4 and POS thermal invoice generation with customizable company branding",
      "Automated tax calculations supporting VAT, GST, and customized line-item discounts",
      "Partial payments and installment recording with real-time balance-due statements",
      "Overdue payment reminders with aging analysis reports (30/60/90 days)"
    ],
    "image": "/projects/invoice-billing-system.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "library-management-system",
    "title": "Library Management System",
    "subtitle": "Academic & Public Library Cataloging, Circulation & Patron Suite",
    "description": "An enterprise desktop library automation system built with VB.NET and SQLite. Features Dewey Decimal cataloging, member management, barcode circulation, and automated overdue fine calculations.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "Barcode Engine",
      "Theme Engine"
    ],
    "keyFeatures": [
      "Complete book inventory with ISBN lookup, Dewey Decimal classification, and author registries",
      "Member registration and borrowing privileges with photo ID card printing support",
      "Circulation desk for rapid check-out/check-in using USB barcode scanners",
      "Automated fine calculation engine with overdue reminder notifications"
    ],
    "image": "/projects/library-management.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "report-generator-pro",
    "title": "ReportGenerator Enterprise",
    "subtitle": "Dynamic SQL Query Builder & Document Export Engine",
    "description": "A desktop reporting engine built with VB.NET and SQLite that allows users to design custom database reports, build queries visually, and export formatted PDF and Excel documents.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "iTextSharp PDF",
      "EPPlus Excel"
    ],
    "keyFeatures": [
      "Visual query builder enabling non-technical users to filter, group, and sort database tables",
      "Custom report layout designer with header, footer, corporate logo, and summary fields",
      "Export engine generating pixel-perfect PDF documents and formatted Excel spreadsheets",
      "Reusable report templates and scheduled batch report automation"
    ],
    "image": "/projects/report-generator-pro.png",
    "githubUrl": "https://github.com/XREFS0"
  },
  {
    "id": "student-management-system",
    "title": "Student Management System (SMS)",
    "subtitle": "Academic Institution Student Lifecycle, Grading & Faculty Portal",
    "description": "A complete desktop academic management suite developed in VB.NET and SQLite. Handles student admissions, department/course enrollments, exam grading, transcripts, and faculty assignments.",
    "category": "Enterprise Systems",
    "technologies": [
      "VB.NET",
      ".NET 8",
      "Windows Forms",
      "SQLite",
      "GPA Calculator",
      "Transcript Generator"
    ],
    "keyFeatures": [
      "End-to-end student admission and lifecycle tracking across academic semesters",
      "Course catalog, prerequisites management, and automated student enrollment checks",
      "Examination grading system with automatic GPA/CGPA computation and grade scaling",
      "Official academic transcript and report card generation with security verification codes"
    ],
    "image": "/projects/student-management.png",
    "githubUrl": "https://github.com/XREFS0"
  }
];
