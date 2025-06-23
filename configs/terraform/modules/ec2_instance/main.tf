provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "instance1" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = "my-key"
}

resource "aws_instance" "instance2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = "my-key"
}
