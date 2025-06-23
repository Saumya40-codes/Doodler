variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "ami_id" {
  description = "EC2 AMI ID"
  type        = string
}

output "public_ip_1" {
  description = "IP of EC2 instance 1 based on environment"
  value       = aws_instance.instance1.public_ip
}

output "public_ip_2" {
  description = "IP of EC2 instance 2 based on environment"
  value       = aws_instance.instance2.public_ip
}
