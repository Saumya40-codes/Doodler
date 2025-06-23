provider "aws" {
  region = "ap-south-1"
}

variable "ami_val" {
  description = "AMI ID value"
}

variable "instance_type_val" {
  description = "Type of EC2 instance"
}

module "ec2_instance" {
  source = "./modules/ec2_instance"
  ami_id = var.ami_val
  instance_type = var.instance_type_val
}
