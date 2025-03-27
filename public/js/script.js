document.addEventListener('DOMContentLoaded', function() {

    const windowsDownloadBtn = document.getElementById('windows-download');
    const macosDownloadBtn = document.getElementById('macos-download');
    
    if (windowsDownloadBtn) {
        windowsDownloadBtn.addEventListener('click', function() {
            const downloadUrl = 'https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-64-bit.exe';

            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }
    
    if (macosDownloadBtn) {
        macosDownloadBtn.addEventListener('click', function() {
            const downloadUrl = 'https://sourceforge.net/projects/git-osx-installer/files/git-2.40.1-intel-universal-mavericks.dmg/download';
            
            setTimeout(() => {
                window.location.href = downloadUrl;
            }, 1000);
        });
    }
    
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.style.transition = 'all 0.3s ease-in-out';
    }
});