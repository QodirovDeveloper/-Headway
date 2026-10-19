$levels = @('beginner','elementary','pre-intermediate','intermediate','upper-intermediate')
New-Item -ItemType Directory -Force -Path 'media' | Out-Null
foreach ($l in $levels) {
    $src = "public\$l"
    $dst = "media\$l"
    if (Test-Path $src) {
        New-Item -ItemType Directory -Force -Path $dst | Out-Null
        if (Test-Path "$src\cover.webp") {
            Copy-Item "$src\cover.webp" "$dst\cover.webp" -Force
        }
        if (Test-Path "$src\pages") {
            Copy-Item "$src\pages" "$dst\pages" -Recurse -Force
        }
        if (Test-Path "$src\audio") {
            Copy-Item "$src\audio" "$dst\audio" -Recurse -Force
        }
    }
}
Write-Output "Backup complete!"
foreach ($l in $levels) {
    $pages = if (Test-Path "media\$l\pages") { (Get-ChildItem "media\$l\pages" -File).Count } else { 0 }
    $audio = if (Test-Path "media\$l\audio") { (Get-ChildItem "media\$l\audio" -File).Count } else { 0 }
    $cover = Test-Path "media\$l\cover.webp"
    Write-Output "media/$l : cover=$cover, pages=$pages, audio=$audio"
}
