# MASA System Monitor

A modern, high-performance, real-time hardware telemetry and desktop diagnostic utility built with C#, .NET 8, WPF, and MVVM architecture.

---

## 📸 Screenshots & Previews

### 📊 Dashboard & System Overview
![Dashboard Overview](src/Dashboard_Overview.png)

<br/>

### ⚙️ CPU & Memory (RAM) Telemetry
| ⚙️ CPU Processor & Per-Core Gauges | 💾 Memory (RAM) Analysis |
| :---: | :---: |
| ![CPU Overview](src/CPU_Overview.png) | ![RAM Overview](src/RAM_Overview.png) |

<br/>

### 🎮 GPU & Storage Inspection
| 🎮 GPU Graphics & VRAM | 💽 Storage & Disks |
| :---: | :---: |
| ![GPU Overview](src/GPU_Overview.png) | ![Storage Overview](src/Storage_Overview.png) |

<br/>

### 🌐 Network & System Diagnostics
| 🌐 Network Throughput & Latency | 📈 Performance History (SQLite) |
| :---: | :---: |
| ![Network Overview](src/Network_Overview.png) | ![Performance History](src/Performance_History_Overview.png) |

<br/>

### ⏱️ Benchmarks & Alert Rules
| ⏱️ Hardware Benchmarks | 🔔 Threshold Alerts & Events |
| :---: | :---: |
| ![Benchmarks Overview](src/Benchmarks_Overview.png) | ![Alerts Overview](src/Alerts_Overview.png) |

<br/>

### ⚡ Processes & Windows Services
| ⚡ Real-Time Process Explorer | 🔧 Windows Background Services |
| :---: | :---: |
| ![Processes Overview](src/Processes_Overview.png) | ![Services Overview](src/Services_Overview.png) |

---

## 🌟 Features

- **Real-Time Telemetry Engine**: Asynchronous polling with configurable intervals (500ms, 1000ms, 2000ms) with zero UI freezing.
- **Deep Hardware Sensors**: CPU (per-core load, clock, temperature, TDP), GPU (utilization, VRAM, clock, fan RPM, temperatures), and RAM capacity breakdown.
- **Live Histograms & Charts**: Powered by LiveCharts2 with smooth gradient area visualizations.
- **Storage & Network Analysis**: Physical disk volumes, space consumption percentages, real-time I/O throughput, active network interfaces, IP addresses, and latency ping.
- **Process & Service Management**: Task explorer with real-time CPU/RAM consumption ranking, thread inspection, priority viewing, and process termination.
- **Windows Services & Startup Inspector**: Direct inspection of installed background services and startup applications with impact estimation.
- **Hardware Inventory**: Detailed hardware tree listing motherboard, CPU, GPU, memory, drives, OS architecture, and system uptime.
- **Built-in Benchmarks**: Multi-threaded CPU stress computation score and 1GB sequential memory throughput benchmark.
- **Threshold Alert System**: Configurable hardware triggers (temperature, load thresholds) with persistent event logging.
- **SQLite Performance History**: Automatic persistent telemetry snapshots for historical analysis.
- **Mini Desktop Widget**: Floating draggable compact overlay widget with live status badges.
- **Serilog Structured Logging**: Diagnostic stream with file and console sinks.

---

## 🏗️ Architecture & Technology Stack

- **Framework**: .NET 8.0 Windows Desktop (WPF)
- **Design Pattern**: Model-View-ViewModel (MVVM) via `CommunityToolkit.Mvvm`
- **Telemetry Sources**: `LibreHardwareMonitorLib` + Windows Kernel P/Invoke (`GetSystemTimes`, `GlobalMemoryStatusEx`) + `PerformanceCounter`
- **Data Visualization**: `LiveChartsCore.SkiaSharpView.WPF`
- **Database Engine**: SQLite via `Microsoft.Data.Sqlite`
- **Logging**: `Serilog` (Console & Rolling File sinks)
- **Testing**: `xUnit` + `Microsoft.NET.Test.Sdk`

---

## 💻 Requirements

- **Operating System**: Windows 10 (Build 19041+) or Windows 11 (64-bit)
- **Runtime**: .NET 8.0 Desktop Runtime (included in self-contained builds)

---

## 🚀 Building & Running

### Build Debug / Release
```bash
dotnet build MasaSystemMonitor.sln -c Release
```

### Run Application
```bash
dotnet run --project MasaSystemMonitor.csproj
```

### Run Unit Tests
```bash
dotnet test MasaSystemMonitor.sln
```

### Publish Standalone Executable
```bash
dotnet publish MasaSystemMonitor.csproj -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -o ./publish
```

---

## 📁 Project Structure

```
├── .github/workflows/ci.yml       # GitHub Actions Continuous Integration
├── .editorconfig                  # Code style and formatting rules
├── .gitignore                     # Git ignore rules
├── MasaSystemMonitor.sln          # Master solution file
├── MasaSystemMonitor.csproj       # Main WPF Application
├── App.xaml / App.xaml.cs         # Application entry point & exception filters
├── MainWindow.xaml                # Frameless glass UI shell with navigation
├── CompactWidgetWindow.xaml       # Floating desktop overlay widget
├── Core/
│   ├── Database/                  # SQLite telemetry persistence (IDatabaseService)
│   └── Native/                    # Windows Kernel P/Invoke definitions
├── Models/                        # Domain models (HardwareMetrics, ProcessItem, etc.)
├── Services/                      # Application telemetry & diagnostic services
│   ├── IHardwareService.cs
│   ├── ISystemManagerService.cs
│   ├── IBenchmarkService.cs
│   └── IAlertService.cs
├── ViewModels/                    # MVVM ViewModels with CommunityToolkit
├── Views/                         # Modular UserControls for each dashboard section
├── Resources/Styles/              # Cyberpunk / Glassmorphism XAML resources
├── src/                           # High-Resolution UI Screenshots
└── tests/
    └── MasaSystemMonitor.Tests/   # Unit & Integration test suite
```

---

## 🔒 Security & Reliability

- All SQL operations utilize parameterized queries (`$parameter`) to prevent SQL injection.
- Process management and sensor queries include defensive resource disposal (`using`, `try/finally`) to eliminate handle leaks.
- Non-admin fallback gracefully adapts when low-level ring0 hardware drivers are restricted.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) &copy; 2026 **XREFS0**. All Rights Reserved.
