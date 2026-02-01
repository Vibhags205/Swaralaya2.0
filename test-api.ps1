# Test backend API
$url = "http://localhost:5000/api/test"
Write-Host "Testing: $url"

try {
    $response = Invoke-WebRequest -Uri $url -Method GET -TimeoutSec 5
    Write-Host "Status: $($response.StatusCode)"
    Write-Host "Response: $($response.Content)"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
}
