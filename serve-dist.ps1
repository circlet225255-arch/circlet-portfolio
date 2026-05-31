$root = Join-Path $PSScriptRoot "dist"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:5173/")

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".svg" = "image/svg+xml"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".json" = "application/json"
}

$listener.Start()
Write-Host "Serving $root at http://localhost:5173/"

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $requestPath = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))

  if ([string]::IsNullOrWhiteSpace($requestPath)) {
    $requestPath = "index.html"
  }

  $filePath = Join-Path $root $requestPath
  if (-not (Test-Path $filePath -PathType Leaf)) {
    $filePath = Join-Path $root "index.html"
  }

  try {
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
    $context.Response.ContentType = $contentTypes[$extension]
    if (-not $context.Response.ContentType) {
      $context.Response.ContentType = "application/octet-stream"
    }
    $context.Response.StatusCode = 200
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } catch {
    $message = [System.Text.Encoding]::UTF8.GetBytes("Server error")
    $context.Response.StatusCode = 500
    $context.Response.OutputStream.Write($message, 0, $message.Length)
  } finally {
    $context.Response.OutputStream.Close()
  }
}
