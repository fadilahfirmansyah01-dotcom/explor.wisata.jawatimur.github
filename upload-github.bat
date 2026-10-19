@echo off
chcp 65001 > nul
cls
echo ========================================================
echo       PANDUAN & SKRIP UPLOAD WEBSITE KE GITHUB
echo ========================================================
echo.
echo Pastikan Anda sudah membuat repository di: https://github.com/new
echo.

set /p GITHUB_NAME="1. Masukkan Nama Akun GitHub Anda: "
set /p GITHUB_EMAIL="2. Masukkan Email Akun GitHub Anda: "
set /p REPO_URL="3. Masukkan URL Repository GitHub Anda (contoh: https://github.com/user/repo.git): "

echo.
echo Mengonfigurasi Git...
git config user.name "%GITHUB_NAME%"
git config user.email "%GITHUB_EMAIL%"

echo Menambahkan seluruh file website...
git add .

echo Membuat commit...
git commit -m "Upload Website Wisata Jawa Timur"

echo Menyiapkan branch main...
git branch -M main

echo Menghubungkan remote GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo Mengunggah (push) file ke GitHub...
echo (Jika diminta login di browser, silakan klik 'Sign in with your browser')
git push -u origin main

echo.
echo ========================================================
echo Selesai! Jika tidak ada error di atas, file Anda sudah
echo terunggah ke GitHub.
echo.
echo Untuk menjalankan website secara online gratis:
echo 1. Buka repository Anda di GitHub.com
echo 2. Masuk ke Settings - Pages
echo 3. Pada Source, pilih 'GitHub Actions'
echo 4. Website Anda akan aktif di:
echo    https://%GITHUB_NAME%.github.io/...
echo ========================================================
pause
