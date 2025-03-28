document.addEventListener('DOMContentLoaded', function () {
    const osNameElement = document.getElementById('detected-os-name');
    const autoDownloadBtn = document.getElementById('auto-download-btn');
    const autoDownloadText = document.getElementById('auto-download-text');
    const downloadSpinner = document.getElementById('download-spinner');

    if (downloadSpinner) {
        downloadSpinner.style.display = 'none';
    }

    function detectOS() {
        const userAgent = window.navigator.userAgent;
        const platform = window.navigator.platform;
        const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
        const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
        const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

        let os = null;
        let osDetails = '';
        let is64Bit = navigator.userAgent.indexOf('WOW64') !== -1 ||
            navigator.userAgent.indexOf('Win64') !== -1 ||
            navigator.userAgent.indexOf('x86_64') !== -1 ||
            navigator.userAgent.indexOf('x86_64') !== -1;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'macOS';
            if (userAgent.indexOf('Mac OS X') !== -1) {
                osDetails = userAgent.indexOf('Intel') !== -1 ? ' (Intel)' : ' (Apple Silicon)';
            }
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
            if (userAgent.indexOf('Windows NT 10.0') !== -1) osDetails = ' 10';
            else if (userAgent.indexOf('Windows NT 6.3') !== -1) osDetails = ' 8.1';
            else if (userAgent.indexOf('Windows NT 6.2') !== -1) osDetails = ' 8';
            else if (userAgent.indexOf('Windows NT 6.1') !== -1) osDetails = ' 7';

            osDetails += is64Bit ? ' 64-bit' : ' 32-bit';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (/Linux/.test(platform)) {
            os = 'Linux';
            if (userAgent.indexOf('Ubuntu') !== -1) osDetails = ' (Ubuntu)';
            else if (userAgent.indexOf('Fedora') !== -1) osDetails = ' (Fedora)';
            else if (userAgent.indexOf('Debian') !== -1) osDetails = ' (Debian)';
        }

        return { os, osDetails, is64Bit };
    }

    const { os, osDetails, is64Bit } = detectOS();
    if (osNameElement && os) {
        osNameElement.textContent = os + osDetails;
    } else if (osNameElement) {
        osNameElement.textContent = 'Unknown OS';
    }

    if (autoDownloadBtn) {
        let downloadUrl = '';

        if (os === 'Windows') {
            downloadUrl = is64Bit
                ? 'https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-64-bit.exe'
                : 'https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-32-bit.exe';
            autoDownloadText.textContent = 'Download Git for Windows' + osDetails;
        } else if (os === 'macOS') {
            if (osDetails.includes('Apple Silicon')) {
                downloadUrl = 'https://sourceforge.net/projects/git-osx-installer/files/git-2.40.1-intel-universal-mavericks.dmg/download';
                autoDownloadText.textContent = 'Download Git for macOS (Apple Silicon)';
            } else {
                downloadUrl = 'https://sourceforge.net/projects/git-osx-installer/files/git-2.40.1-intel-universal-mavericks.dmg/download';
                autoDownloadText.textContent = 'Download Git for macOS (Intel)';
            }
        } else if (os === 'Linux') {
            autoDownloadText.textContent = 'View Linux Installation Instructions';
        } else {
            autoDownloadText.textContent = 'Select Download Option Below';
        }

        autoDownloadBtn.addEventListener('click', function () {
            if (os === 'Linux') {
                document.querySelector('.grid-cols-1.md\\:grid-cols-3').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (downloadUrl) {
                if (downloadSpinner) {
                    downloadSpinner.style.display = 'inline-block';
                }

                setTimeout(() => {
                    window.location.href = downloadUrl;

                    setTimeout(() => {
                        if (downloadSpinner) {
                            downloadSpinner.style.display = 'none';
                        }
                    }, 1000);
                }, 500);
            }
        });
    }

    const windowsDownloadBtn = document.getElementById('windows-download');
    const macosDownloadBtn = document.getElementById('macos-download');
    const githubDesktopDownloadBtn = document.getElementById('github-desktop-download');
    const windows32BitDownloadBtn = document.getElementById('windows-32bit-download');
    const windowsPortableDownloadBtn = document.getElementById('windows-portable-download');
    const macosArmDownloadBtn = document.getElementById('macos-arm-download');
    const macosLegacyDownloadBtn = document.getElementById('macos-legacy-download');

    if (windowsDownloadBtn) {
        windowsDownloadBtn.addEventListener('click', function () {
            const downloadUrl = 'https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-64-bit.exe';

            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }

    if (macosDownloadBtn) {
        macosDownloadBtn.addEventListener('click', function () {
            const downloadUrl = 'https://sourceforge.net/projects/git-osx-installer/files/git-2.40.1-intel-universal-mavericks.dmg/download';

            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }

    if (githubDesktopDownloadBtn) {
        githubDesktopDownloadBtn.addEventListener('click', function () {
            const isWindows = navigator.platform.indexOf('Win') > -1;
            const downloadUrl = isWindows
                ? 'https://central.github.com/deployments/desktop/desktop/latest/win32'
                : 'https://central.github.com/deployments/desktop/desktop/latest/darwin';

            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }

    if (windows32BitDownloadBtn) {
        windows32BitDownloadBtn.addEventListener('click', function () {
            const downloadUrl = 'https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-32-bit.exe';

            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }

    if (windowsPortableDownloadBtn) {
        windowsPortableDownloadBtn.addEventListener('click', function () {
            const downloadUrl = 'https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/PortableGit-2.40.1-64-bit.7z.exe';

            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }

    if (macosArmDownloadBtn) {
        macosArmDownloadBtn.addEventListener('click', function () {
            const downloadUrl = 'https://sourceforge.net/projects/git-osx-installer/files/git-2.40.1-arm64-universal-mavericks.dmg/download';

            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }

    if (macosLegacyDownloadBtn) {
        macosLegacyDownloadBtn.addEventListener('click', function () {
            const downloadUrl = 'https://sourceforge.net/projects/git-osx-installer/files/git-2.33.0-intel-universal-mavericks.dmg/download';

            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.style.transition = 'all 0.3s ease-in-out';
    }

    const donationForm = document.getElementById('donation-form');
    const donationAmountInput = document.getElementById('donation-amount');
    const donationAmountBtns = document.querySelectorAll('.donation-amount-btn');
    
    if (donationAmountBtns) {
        donationAmountBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                donationAmountBtns.forEach(b => b.classList.remove('active'));
                
                this.classList.add('active');
                
                if (donationAmountInput) {
                    donationAmountInput.value = this.dataset.amount;
                }
            });
        });
    }
    
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const amount = donationAmountInput.value;
            if (!amount || isNaN(amount) || amount <= 0) {
                alert('Please enter a valid donation amount');
                return;
            }
            
            const upiId = '9389979319@ybl';
            const payeeName = 'GitX Development';
            const description = 'Donation to GitX';
            
            let upiLink;
            
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            
            if (isMobile) {
                upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(description)}`;
                
                sessionStorage.setItem('donation_amount', amount);
                
                window.location.href = upiLink;
                
                setTimeout(() => {
                    window.location.href = '/donation-thank-you';
                }, 5000);
            } else {
                alert('Please scan the QR code with your UPI app or use a mobile device to make the payment');
            }
        });
    }
});