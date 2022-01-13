# Update the mirror
sed -i 's|http://archive.|http://ir.archive.|g' /etc/apt/sources.list

# Set the distro noninteractive
export DEBIAN_FRONTEND=noninteractive

# Update the softwares
apt update
apt dist-upgrade -y

# Install curl
if ! apt list --installed | grep "curl"; then
    apt install curl -y
else
    echo "Curl already installed"
fi

# Install the nodejs
if ! apt list --installed | grep "nodejs"; then
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Nodejs already installed"
fi    
# Install fish and make it default
if ! apt list --installed | grep "fish"; then
    apt install fish -y
    echo 'export SHELL=/usr/bin/fish' >> /home/vagrant/.bashrc
else
    echo "Fish already installed"
fi

# Installing the tmux
if ! apt list --installed | grep "tmux"; then
    apt install tmux -y
else
    echo "Tmux already installed"
fi

