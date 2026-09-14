# Linux System Information Tool

![Terminal Preview](assets/terminal-preview.jpg)

A professional, minimal, and fast command-line utility for retrieving comprehensive system information on Linux machines. Written entirely in standard Bash, it relies on built-in Linux interfaces and standard utilities. All rights are reserved to **XREFS0**.

## Features

- **System Information**: Hostname, distribution details, kernel, uptime, and virtualization.
- **CPU Details**: Architecture, logical cores, model name, and current load average.
- **Memory & Swap**: Usage statistics for both RAM and swap space.
- **Storage/Disk**: Mounted filesystems, capacity, and usage.
- **Network Interfaces**: IPv4, IPv6, MAC addresses, state, and default gateway.
- **Processes**: Current total process count and top resource consumers.
- **Hardware**: Manufacturer, product name, and block devices.
- **Security Posture**: Status of SELinux, AppArmor, and active firewalls (UFW/firewalld).
- **Service Status**: Metrics on running and failed systemd services.
- **Package Manager Detection**: Identifies APT, DNF, YUM, Pacman, Zypper, or APK.
- **No Dependencies**: Works out-of-the-box on common Linux distributions.

## Requirements

The script is built to run on minimal Linux installations. It uses POSIX tools and core utilities.

- `bash` (Version 3.2+)
- Standard Linux utilities: `awk`, `sed`, `grep`, `cut`, `df`, `free`, `ps`, `ip`, `lsblk`, `uname`

Optional tools for enhanced information:
- `lscpu`
- `sestatus`, `aa-status`, `ufw`, `firewall-cmd`
- `systemctl`

## Installation

You can run the script directly from this repository:

```bash
git clone https://github.com/your-username/linux-system-information.git
cd linux-system-information
chmod +x linux-info.sh
./linux-info.sh
```

## Usage

By default, the script will output all available system information.

```bash
./linux-info.sh
```

### Options

| Option | Description |
|---|---|
| `--help` | Show the help message and exit |
| `--version` | Show version information |
| `--all` | Show all information (default) |
| `--system` | Show system information |
| `--cpu` | Show CPU information |
| `--memory` | Show memory information |
| `--disk` | Show disk/storage information |
| `--network` | Show network information |
| `--processes` | Show processes information |
| `--hardware` | Show hardware information |
| `--security` | Show security information |
| `--services` | Show services information |
| `--plain` | Disable formatting/colors |
| `--no-color` | Disable formatting/colors |

### Examples

Display only memory and CPU information:

```bash
./linux-info.sh --memory --cpu
```

Disable colors in the terminal:

```bash
./linux-info.sh --no-color
```

Pipe output to a file (colors are automatically disabled when not writing to an interactive terminal):

```bash
./linux-info.sh > system_status.txt
```

## Supported Linux Distributions

The tool has been designed to be highly portable and is expected to work reliably on:

- Ubuntu / Debian / Linux Mint
- Fedora / Rocky Linux / AlmaLinux / CentOS
- Arch Linux
- openSUSE
- Alpine Linux

## Troubleshooting

- **Missing Information**: The script degrades gracefully. If a utility like `lscpu` or `systemctl` is missing, the script will display the information as unavailable or fetch it from `/proc` and `/sys` where possible.
- **Permission Errors**: The tool does not require `sudo`. It will skip over privileged information silently or display it as unavailable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
