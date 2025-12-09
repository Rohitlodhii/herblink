document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm')
  const emailInput = document.getElementById('email')
  const passwordInput = document.getElementById('password')
  const errorMessage = document.getElementById('errorMessage')
  const loginButton = document.getElementById('loginButton')

  // Handle form submission
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    // Get form values
    const email = emailInput.value.trim()
    const password = passwordInput.value

    // Validate inputs
    if (!email || !password) {
      showError('Please fill in all fields')
      return
    }

    // Disable button and show loading state
    loginButton.disabled = true
    loginButton.textContent = 'Logging in...'
    hideError()

    try {
      // Call the login API via preload
      const result = await window.api.login(email, password)

      if (result.success) {
        // Save token to localStorage
        localStorage.setItem('authToken', result.token)
        
        // Optionally save to file system via IPC
        try {
          await window.api.saveToken(result.token)
        } catch (err) {
          console.warn('Failed to save token to file system:', err)
          // Continue anyway, token is in localStorage
        }

        // Show success message
        alert('Login successful! Token saved.')
        
        // TODO: Navigate to dashboard page
        // For now, just show success alert
        console.log('Login successful. Token:', result.token)
        
        // Reset form
        loginForm.reset()
      } else {
        // Show error message from backend
        showError(result.error || 'Login failed. Please try again.')
      }
    } catch (error) {
      // Handle unexpected errors
      showError('An unexpected error occurred: ' + error.message)
    } finally {
      // Re-enable button
      loginButton.disabled = false
      loginButton.textContent = 'Login'
    }
  })

  function showError(message) {
    errorMessage.textContent = message
    errorMessage.style.display = 'block'
  }

  function hideError() {
    errorMessage.style.display = 'none'
    errorMessage.textContent = ''
  }

  // Clear error when user starts typing
  emailInput.addEventListener('input', hideError)
  passwordInput.addEventListener('input', hideError)
})



