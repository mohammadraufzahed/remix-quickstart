Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/impish64"
  config.vm.network :public_network
  config.vm.provider "virtualbox" do |vb|
    vb.name = "Remix Quickstart Workstation"
    vb.memory = "4084"
  end
  config.vm.provision "shell", path: "./vagrant/setup.sh"
end
