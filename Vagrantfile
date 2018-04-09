#Cria 1 vms do ubuntu para rodar o tutorial
Vagrant.configure("2") do |config|

    #compartilha o diretório com a vm
    config.vm.synced_folder "./provisioning", "/vagrant_data"
    
    #Mesma key para todas as máquinas
    config.ssh.insert_key = false
  
    config.vm.define "vagrant4" do |vagrant4|
      vagrant4.vm.box = "ubuntu/xenial64"
      vagrant4.vm.network :private_network, ip: "192.168.55.55"
      vagrant4.vm.network "forwarded_port", guest: 3000, host: 3000
      vagrant4.vm.network "forwarded_port", guest: 443, host: 8443
    end
  
  end