class Doctor < ApplicationRecord
  validates :name, :position, :npi, presence: true 
end
