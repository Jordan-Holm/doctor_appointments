class User < ApplicationRecord
has_many :appointments, dependent: :destroy
has_many :doctors, through: :appointments

validates :name, :age, :disease, presence: true 
end
