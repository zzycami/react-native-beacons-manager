require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'react-native-beacons-manager'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.source         = { :git => 'https://github.com/zzycami/react-native-beacons-manager', :tag => s.version }

  s.requires_arc   = true
  s.platform       = :ios, '8.0'

  s.preserve_paths = 'LICENSE', 'README.md', 'package.json', 'index.js'

  s.source_files   = 'ios/RNiBeacon/RNiBeacon/*.{h,m}'
  s.public_header_files = 'ios/RNiBeacon/RNiBeaco/*.h'

  s.resource_bundles = {
    'react-native-beacons-manager' => 'images/*.png'
  }

  s.dependency 'React'
end
