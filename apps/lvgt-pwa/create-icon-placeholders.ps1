# Create PWA Icon Placeholders
Write-Host "🎨 Creating PWA icon placeholders..." -ForegroundColor Yellow

# Create icons directory
$iconsPath = "public\icons"
if (!(Test-Path $iconsPath)) {
    New-Item -ItemType Directory -Path $iconsPath -Force | Out-Null
    Write-Host "✅ Created icons directory" -ForegroundColor Green
}

# Create simple text file placeholders for now
"LVGT Icon 192x192" | Out-File -FilePath "public\icons\icon-192.png"
"LVGT Icon 512x512" | Out-File -FilePath "public\icons\icon-512.png"
"LVGT Favicon" | Out-File -FilePath "public\favicon.ico"

Write-Host "✅ Created icon-192.png (placeholder)" -ForegroundColor Green
Write-Host "✅ Created icon-512.png (placeholder)" -ForegroundColor Green
Write-Host "✅ Created favicon.ico (placeholder)" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Placeholder icons created!" -ForegroundColor Yellow
Write-Host "   Replace with real icons later." -ForegroundColor Gray
