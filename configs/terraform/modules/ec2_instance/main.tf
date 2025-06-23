provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "instance1" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = "my-key"
  subnet_id     = var.subnet_id
  associate_public_ip_address = true
}

resource "aws_instance" "instance2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = "my-key"
  subnet_id     = var.subnet_id
  associate_public_ip_address = true
}
