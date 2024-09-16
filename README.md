.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast {
  padding: 15px 20px;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: fadeIn 0.5s;
  cursor: pointer;
}

.toast-success {
  background-color: #28a745;
}

.toast-error {
  background-color: #dc3545;
}

.toast-warning {
  background-color: #ffc107;
  color: #333;
}

.toast-info {
  background-color: #17a2b8;
}

.toast-message {
  margin-right: 10px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

