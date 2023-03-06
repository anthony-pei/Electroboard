import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';

const BleScanner = () => {
  const [devices, setDevices] = useState<(Device | null)[] | null | undefined>(null);
  const manager = new BleManager();

  useEffect(() => {
    const scanForDevices = async () => {
      await manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.error(error);
          return;
        }
        setDevices((prevDevices) => {
          const existingDeviceIndex= prevDevices?.findIndex(
            (d: any) => d.id === device?.id
          );
          if (existingDeviceIndex !== -1) {
            // Replace existing device with updated device
            if (prevDevices !== null && prevDevices !== undefined && existingDeviceIndex !== undefined && device != null) {
              const updatedDevices = [...prevDevices];
              updatedDevices[existingDeviceIndex] = device;
              return updatedDevices;
            }
          } else {
            // Add new device to list
            if (prevDevices != null) {
              return [...prevDevices, device];
            }
          }
          return
        });
      });
    };

    scanForDevices();

    return () => {
      manager.stopDeviceScan();
    };
  }, []);

  return (
    <View>
      <Text>Found {devices ? devices.length : 0} devices:</Text>
      {devices &&
        devices.map((device) => (
          <Text key={device?.id}>
            {device?.name ?? 'Unnamed Device'} ({device?.id})
          </Text>
        ))}
    </View>
  );
};

export default BleScanner;
