provider "aws" {
  region = "ap-south-1"
}

variable "ami_val" {
  description = "AMI ID value"
}

variable "instance_type_val" {
  description = "Type of EC2 instance"
}

variable "subnet_id_val" {
  description = "id of the subnet to place resources in."
}

module "ec2_instance" {
  source = "./modules/ec2_instance"
  ami_id = var.ami_val
  instance_type = var.instance_type_val
  subnet_id = var.subnet_id_val
}

output "public_ip_1" {
  value = module.ec2_instance.public_ip_1
}

output "public_ip_2" {
  value = module.ec2_instance.public_ip_2
}
