# Color Migration Script for All Remaining Pages
# Run this in PowerShell to migrate all pages at once

$pages = @(
    "d:\Aptivora\MILMA\Milma\src\pages\insights\Tenders.module.css",
    "d:\Aptivora\MILMA\Milma\src\pages\insights\OngoingProjects.module.css",
    "d:\Aptivora\MILMA\Milma\src\pages\insights\UpcomingProjects.module.css",
    "d:\Aptivora\MILMA\Milma\src\pages\insights\Downloads.module.css",
    "d:\Aptivora\MILMA\Milma\src\pages\Services.module.css",
    "d:\Aptivora\MILMA\Milma\src\pages\services\ServicesSubPage.module.css",
    "d:\Aptivora\MILMA\Milma\src\pages\about\About.module.css",
    "d:\Aptivora\MILMA\Milma\src\pages\contact\Contact.module.css",
    "d:\Aptivora\MILMA\Milma\src\pages\Products.module.css"
)

foreach ($file in $pages) {
    Write-Host "Migrating: $file"
    
    (Get-Content $file) `
        -replace '#991b1b', 'var(--color-primary)' `
        -replace '#8b0000', 'var(--color-primary-darker)' `
        -replace '#7f1d1d', 'var(--color-primary-dark)' `
        -replace '#a52a2a', 'var(--color-primary-brown)' `
        -replace '#c41e3a', 'var(--color-primary-crimson)' `
        -replace '#ffd700', 'var(--color-gold)' `
        -replace '#ffeb3b', 'var(--color-secondary)' `
        -replace '#ffed4e', 'var(--color-gold-light)' `
        -replace '#008f3d', 'var(--color-service-green)' `
        -replace '#006b2e', 'var(--color-service-green-dark)' `
        -replace '#dcb315', 'var(--color-service-gold)' `
        -replace 'rgba\(0, 143, 61, 0\.1\)', 'var(--color-service-green-10)' `
        -replace 'rgba\(0, 143, 61, 0\.3\)', 'var(--color-service-green-30)' `
        -replace 'rgba\(220, 179, 21, 0\.8\)', 'var(--color-service-gold-80)' `
        -replace 'rgba\(0, 50, 40, 0\.7\)', 'var(--color-about-green)' `
        -replace 'rgba\(0, 50, 40, 0\.8\)', 'var(--color-about-green-dark)' `
        -replace '#333', 'var(--color-text-primary)' `
        -replace '#444', 'var(--color-text-medium)' `
        -replace '#555', 'var(--color-text-secondary)' `
        -replace '#666', 'var(--color-text-tertiary)' `
        -replace '#888', 'var(--color-text-muted)' `
        -replace '#999', 'var(--color-text-light-gray)' `
        -replace '#222', 'var(--color-text-darker)' `
        -replace '#1a1a1a', 'var(--color-text-dark)' `
        -replace '#1e293b', 'var(--color-slate-dark)' `
        -replace '#334155', 'var(--color-slate-medium)' `
        -replace '#64748b', 'var(--color-slate)' `
        -replace '#94a3b8', 'var(--color-slate-light)' `
        -replace '#ffffff', 'var(--color-bg)' `
        -replace '#f8f9fa', 'var(--color-bg-gray)' `
        -replace '#f9f9f9', 'var(--color-bg-light)' `
        -replace '#fef5f5', 'var(--color-bg-pink)' `
        -replace '#f8fafc', 'var(--color-bg-slate)' `
        -replace '#f1f5f9', 'var(--color-bg-slate-light)' `
        -replace '#e0e0e0', 'var(--color-bg-medium-gray)' `
        -replace '#ddd', 'var(--color-border)' `
        -replace '#f0f0f0', 'var(--color-border-light)' `
        -replace '#e2e8f0', 'var(--color-border-slate)' `
        -replace '#cbd5e1', 'var(--color-border-slate-medium)' `
        -replace '#dcfce7', 'var(--color-green-light)' `
        -replace '#166534', 'var(--color-green-dark)' `
        -replace 'color: white;', 'color: var(--color-text-light);' `
        -replace 'background: white;', 'background: var(--color-bg);' `
        -replace 'background-color: white;', 'background-color: var(--color-bg);' `
        -replace 'rgba\(255, 255, 255, 0\.9\)', 'var(--color-white-90)' `
        -replace 'rgba\(255, 255, 255, 0\.95\)', 'var(--color-white-95)' `
        -replace 'rgba\(0, 0, 0, 0\.7\)', 'var(--color-black-70)' `
        -replace 'rgba\(139, 0, 0, 0\.1\)', 'var(--color-primary-10)' `
        -replace 'rgba\(139, 0, 0, 0\.2\)', 'var(--color-primary-20)' `
        -replace 'rgba\(139, 0, 0, 0\.3\)', 'var(--color-primary-30)' `
        -replace 'rgba\(139, 0, 0, 0\.4\)', 'var(--color-primary-40)' `
        | Set-Content $file
    
    Write-Host "✓ Completed: $file"
}

Write-Host "`nAll pages migrated successfully!"
