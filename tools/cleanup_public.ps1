$levels = @('beginner','elementary','pre-intermediate','intermediate','upper-intermediate')
foreach ($l in $levels) {
    if (Test-Path "public\$l\pages") {
        Remove-Item "public\$l\pages" -Recurse -Force
    }
    if (Test-Path "public\$l\audio") {
        Remove-Item "public\$l\audio" -Recurse -Force
    }
    if (Test-Path "public\$l\cover.webp") {
        Remove-Item "public\$l\cover.webp" -Force
    }
}
Write-Output "Cleanup complete! Remaining items in public:"
Get-ChildItem public -Recurse | Select-Object FullName
